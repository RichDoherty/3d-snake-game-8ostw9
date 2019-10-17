import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'
import Player from './Player';

/** Class that sets players and runs the game */
class GameController {
  private worldModel:WorldModel;
  private p1: Player;
  private p2: Player;
  /**
   * Initiaizes the game world.
   * @param w - WorldModel that is being used.
   */
  constructor(w:WorldModel) {
    this.worldModel = w;
  }
  /**
   * Sets Player 1 as a human player or ai.
   * @param newPlayer - What player1 will be set to.
   */
  public set player1(newPlayer:Player) {
    this.p1 = newPlayer;
  }
  /**
   * Sets Player 2 as a human player or ai.
   * @param newPlayer - What player1 will be set to.
   */
  public set player2(newPlayer:Player) {
    this.p2 = newPlayer;
  }
  /**
   * Runs the game.
   */
  public run() {
    let lastTime = 0;
    let updateFrame = milliseconds => {
      this.p1.makeTurn();
      //this.p2.makeTurn();
      if(milliseconds > lastTime + 250) { 
        this.worldModel.update(1);
        lastTime = lastTime + 250;
      }
      requestAnimationFrame(updateFrame);
    }
    requestAnimationFrame(updateFrame);
  }
}

export default GameController;