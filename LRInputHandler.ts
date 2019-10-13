import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'
import Player from './Player';
import View from './IView';
import InputHandler from './iInputHandler';

class LRInputHandler implements InputHandler {
  private wasLeftArrowPushed: boolean;
  private wasRightArrowPushed: boolean;
  constructor() {
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;
    window.addEventListener("keydown", event => {
      if(event.key === "ArrowLeft") { this.wasLeftArrowPushed = true; }
      else if(event.key === "ArrowRight") { this.wasRightArrowPushed = true; }
    })
  }
  public madeLeftMove() {
    return this.wasLeftArrowPushed;
  }
  public madeRightMove() {
    return this.wasRightArrowPushed;
  }
  public resetLeftMove() {
    this.wasLeftArrowPushed = false;
  }
  public resetRightMove() {
    this.wasRightArrowPushed = false;
  }
}

export default LRInputHandler;