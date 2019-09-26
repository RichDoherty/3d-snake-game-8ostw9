import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'

abstract class Player {
  private sc_: SnakeController;
  constructor(controller:SnakeController) {
    this.sc_ = controller;
  }
}

export default Player;