import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'

/** Abstract class representing the player. */
abstract class Player {
  protected sc: SnakeController;
  /**
   * Creates a controller for the player to use.
   * @param controller - Controller to be used by the player.
   */
  constructor(controller:SnakeController) {
    this.sc = controller;
  }
  abstract makeTurn(): void;
  
  public isActive() {
    return this.sc.isSnakeActive;
  }
}

export default Player;