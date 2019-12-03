import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';

/** Class that allows the player to control the snake. */
class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;
  /**
   * Creates a controller.
   * @param world - A world to be used.
   * @param snake - Snake to be controlled.
   */
  constructor(world:WorldModel, snake:Snake) {
    this.snakeWorld = world;
    this.slitherer = snake;
  }
  /**
   * Allows player to turn the snake left.
   */
  public turnSnakeLeft() {
    this.slitherer.turnLeft();
  }
  /**
   * Allows the player to turn the snake right.
   */
  public turnSnakeRight() {
    this.slitherer.turnRight();
  }
  /**
   * Gets the position of the snake.
   */
  get snakePosition() {
    return this.slitherer.position;
  }
  /**
   * Gets the direction of the snake.
   */
  get snakeDirection() {
    return this.slitherer.direction;
  }
  /**
   * Gets the width of the world.
   */
  public get width() {
    return this.snakeWorld.width;
  }
  /**
   * Gets the height of the world.
   */
  public get height() {
    return this.snakeWorld.height;
  }

  public get isSnakeActive() {
    return this.slitherer.isActive;
  }
}

export default SnakeController;