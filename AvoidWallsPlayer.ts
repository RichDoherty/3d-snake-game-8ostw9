import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'
import Player from './Player';

class AvoidWallsPlayer extends Player {
  constructor(controller:SnakeController) {
    super(controller);
  }
  public makeTurn() {
    if(this.sc.snakeDirection === 2 && this.sc.snakePosition.x === 0 && this.sc.snakePosition.y < this.sc.worldHeight) { this.sc.turnSnakeLeft(); }
  }
}

export default AvoidWallsPlayer;