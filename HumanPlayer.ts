import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController';
import Player from './Player';
import InputHandler from './iInputHandler';

/** Class representing a human player */
class HumanPlayer extends Player {
  private controller:SnakeController;
  private handler:InputHandler;
  /**
   * Creates a controller for the player to use.
   * @param sc - SnakeController
   * @param ih - InputHandler
   */
  constructor(sc:SnakeController, ih:InputHandler) {
    super(sc);
    this.controller = sc;
    this.handler = ih;
  }
  /**
   * Makes the snake turn when the player makes an input.
   */
  makeTurn():void {
    if(this.handler.madeLeftMove()) {
      this.controller.turnSnakeLeft();
      this.handler.resetLeftMove();
    }
    if(this.handler.madeRightMove()) {
      this.controller.turnSnakeRight();
      this.handler.resetRightMove();
    }
  }
}

export default HumanPlayer;