import display from './display';
import Point from './Point';
import Snake from './Snake';

class WorldModel {
  private snake:Snake;
  private width: number;
  private height: number;

  constructor(startSnake:Snake) {
    this.snake = startSnake;
    this.width = 20;
    this.height = 20;
  }

  public update(steps:number) {
    this.snake.move(steps);
  }

  public get getSnake() {
    return this.snake;
  }
  public get getWidth() {
    return this.width;
  }
  public get getHeight() {
    return this.height;
  }
}

export default WorldModel;