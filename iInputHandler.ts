import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'
import Player from './Player';
import View from './IView';

interface InputHandler {
  madeLeftMove: () => boolean;
  madeRightMove: () => boolean;
  resetLeftMove: () => void;
  resetRightMove: () => void;
}

export default InputHandler;