import display from './display';
import Point from './Point';
import Snake from './Snake';
import View from './IView';
import CanvasView from './CanvasView';

class WorldModel {
  private snake:Snake;
  private width: number;
  private height: number;
  private view: CanvasView|null;

  constructor(startSnake:Snake) {
    this.snake = startSnake;
    this.width = 20;
    this.height = 20;
    this.view = null;
  }

  public update(steps:number) {
    this.snake.move(steps);
    if(this.view !== null) { display(this.view); }
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

  public set setView(view:CanvasView) {
    this.view = view;
  }
}

export default WorldModel;