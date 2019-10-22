import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'
import Player from './Player';
import View from './IView';
import InputHandler from './iInputHandler';

/** Implemets InputHandler to be used by the player */
class LRInputHandler implements InputHandler {
  private wasLeftArrowPushed: boolean;
  private wasRightArrowPushed: boolean;
  /** Initializes the states of the button inputs and checks if the player inputs a command for the snake to move. */
  constructor() {
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;
    window.addEventListener("keydown", event => {
      if(event.key === "ArrowLeft") { this.wasLeftArrowPushed = true; }
      else if(event.key === "ArrowRight") { this.wasRightArrowPushed = true; }
    })
  }
  /** 
   * Returns true or fals depending if the player made an input to turn left. 
   * @return if the left arrow was pushed since the last reset.
  */
  public madeLeftMove() {
    return this.wasLeftArrowPushed;
  }
    /** Returns true or fals depending if the player made an input to turn right. */
  public madeRightMove() {
    return this.wasRightArrowPushed;
  }
  /** Resets  */
  public resetLeftMove() {
    this.wasLeftArrowPushed = false;
  }
  public resetRightMove() {
    this.wasRightArrowPushed = false;
  }
}

export default LRInputHandler;