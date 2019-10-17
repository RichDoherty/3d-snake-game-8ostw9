import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'
import Player from './Player';
import View from './IView';

/** Interface that handles inputs */
interface InputHandler {
  /** Indicates if the player has moved the snake left. */
  madeLeftMove: () => boolean;
  /** Indicates if the player has moved the snake right. */
  madeRightMove: () => boolean;
  /** Resets the state of the input. */
  resetLeftMove: () => void;
  /** Resets the state of the input. */
  resetRightMove: () => void;
}

export default InputHandler;