import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController';
import Player from './Player';
import InputHandler from './iInputHandler';

class HumanPlayer extends Player {
  private controller:SnakeController;
  private handler:InputHandler;
  constructor(sc:SnakeController, ih:InputHandler) {
    super(sc);
    this.controller = sc;
    this.handler = ih;
  }
  makeTurn():void {
    if(this.handler.madeLeftMove) {
      this.controller.turnSnakeLeft;
      this.handler.resetLeftMove;
    }
    if(this.handler.madeRightMove) {
      this.controller.turnSnakeRight;
      this.handler.resetRightMove;
    }
  }
}

export default HumanPlayer;