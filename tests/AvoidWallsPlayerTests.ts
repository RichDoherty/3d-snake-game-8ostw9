import AvoidWallsPlayer from '../AvoidWallsPlayer';
import display from '../display';
import Snake from '../Snake';
import SnakeTests from '../SnakeTests';
import WorldModel from '../WorldModel';
import View from '../IView';
import CanvasView from '../CanvasView';
import SnakeController from '../SnakeController';
import GameController from '../GameController';
import HumanPlayer from '../HumanPlayer';
import InputHandler from '../IInputHandler';
import LRInputHandler from '../LRInputHandler';

descirbe("avoidWallsPlayer", function() {
  it("turns the proper way while going down", function() {
    let s = new Snake;
    let avoid = new Snake;
    let w = new WorldModel;
    w.addSnake(s);
    w.addSnake(avoid);
    let sControl = new SnakeController(w, w.snakeList[0]);
    let sControl2 = new SnakeController(w, w.snakeList[1]);
    let gControl = new GameController(w);
    let lrIh = new LRInputHandler;
    let hPlayer = new HumanPlayer(sControl, lrIh);
    let aPlayer = new AvoidWallsPlayer(sControl2);
    gControl.player1 = hPlayer;
    gControl.player2 = aPlayer;
    expect(aPlayer.makeTurn()).toHaveBeenCalled();
  })
})