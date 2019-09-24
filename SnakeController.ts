import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';

class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;

  constructor(world:WorldModel, snake:Snake) {
    this.snakeWorld = world;
    this.slitherer = snake;
  }

  public turnSnakeLeft() {
    this.slitherer.turnLeft();
  }
  public turnSnakeRight() {
    this.slitherer.turnRight();
  }
  get snakePosition() {
    return this.slitherer.position;
  }
  get snakeDirection() {
    return this.slitherer.direction;
  }
  public get worldWidth() {
    return this.snakeWorld.getWidth;
  }
  public get worldHeight() {
    return this.snakeWorld.getHeight;
  }
}