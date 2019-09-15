import display from './display';
import Point from './Point';
import Snake from './Snake';

class WorldMode1 {
  private snake:Snake;

  constructor(snake:Snake) {
    this.snake = snake;
  }

  public update(steps:number) {
    this.snake.move(steps);
  }

  public get getSnake() {
    return this.snake;
  }
}

export default WorldMode1;