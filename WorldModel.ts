import display from './display';
import Point from './Point';
import Snake from './Snake';
import View from './IView';
import CanvasView from './CanvasView';

class WorldModel {
  private worldSnake:Snake;
  private worldWidth: number;
  private worldHeight: number;
  private worldView: View|null;

  constructor(startSnake:Snake) {
    this.worldSnake = startSnake;
    this.worldWidth = 10;
    this.worldHeight = 20;
    this.worldView = null;
  }

  public update(steps:number) {
    this.worldSnake.move(steps);
    if(this.worldView !== null) { display(this.view); }
  }

  public get snake() {
    return this.worldSnake;
  }
  public get width() {
    return this.worldWidth;
  }
  public get height() {
    return this.worldHeight;
  }

  public set view(newView:View) {
    this.worldView = newView;
  }
}

export default WorldModel;