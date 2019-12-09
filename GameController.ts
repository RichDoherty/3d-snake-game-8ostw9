import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'
import Player from './Player';
import ActorCollisionHandlers from './ActorCollisionHandlers';
import SnakeFoodCollisionHandler from './SnakeFoodCollisionHandler';
import SnakeSnakeCollisionHandler from './SnakeSnakeCollisionHandler';

/** Class that sets players and runs the game */
class GameController {
  private worldModel:WorldModel;
  private p1: Player;
  private p2: Player;
  private game;
  /**
   * Initiaizes the game world.
   * @param w - WorldModel that is being used.
   */
  constructor(w) {
    //this.game = g;
    let ActorCollision = new ActorCollisionHandlers();
    let SnakeFoodCollision = new SnakeFoodCollisionHandler();
    let SnakeSnakeCollision = new SnakeSnakeCollisionHandler()
    ActorCollision.addCollisionAction("snake", "food", SnakeFoodCollision);
    ActorCollision.addCollisionAction("snake", "snake", SnakeSnakeCollision);
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

  init(data) {
    
  }
  /**
   * Runs the game.
   */
  public run() {
    let lastTime = 0;
    let updateFrame = milliseconds => {
      this.p1.makeTurn();
      this.p2.makeTurn();
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