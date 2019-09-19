import display from './display';
import Point from './Point';
import Snake from './Snake';

class WorldModel {
  private snake:Snake;

  constructor(startSnake:Snake) {
    this.snake = startSnake;
  }

  public update(steps:number) {
    this.snake.move(steps);
  }

  public get getSnake() {
    return this.snake;
  }
}

export default WorldModel;