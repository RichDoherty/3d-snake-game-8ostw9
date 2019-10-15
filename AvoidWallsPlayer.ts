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
    if(this.sc.snakeDirection === 2 && this.sc.snakePosition.x === 0 && this.sc.snakePosition.y < this.sc.height) { this.sc.turnSnakeLeft(); }
    else if(this.sc.snakeDirection === 1 && this.sc.snakePosition.y === this.sc.height && this.sc.snakePosition.x < this.sc.width) { this.sc.turnSnakeLeft(); }
    else if(this.sc.snakeDirection === 3 && this.sc.snakePosition.x === this.sc.width && this.sc.snakePosition.y < this.sc.height) { this.sc.turnSnakeLeft(); }
    else if(this.sc.snakeDirection === 4 && this.sc.snakePosition.y === 0 && this.sc.snakePosition.x < this.sc.height) { this.sc.turnSnakeLeft(); }
  }
}

export default AvoidWallsPlayer;