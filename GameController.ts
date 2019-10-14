import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'
import Player from './Player';

class GameController {
  private worldModel:WorldModel;
  private p1: Player;
  private p2: Player;
  
  constructor(w:WorldModel) {
    this.worldModel = w;
  }
  public set player1(newPlayer:Player) {
    this.p1 = newPlayer;
  }
  public set player2(newPlayer:Player) {
    this.p2 = newPlayer;
  }
  public run() {
    let lastTime = 0;
  }
  public updateFrame() {
    this.p1.makeTurn();
    this.p2.makeTurn();
  }
}