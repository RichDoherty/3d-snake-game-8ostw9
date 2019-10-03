import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'
import Player from './Player';
import View from './IView';

class CanvasView implements View {
  private canvas;
  private context;
  private scaler:number;
  constructor(scaler:number) {
    this.scaler = scaler;
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");
  }
  public display(w:WorldModel) {
    this.canvas.width = w.getWidth * this.scaler;
    this.canvas.height = w.getHeight * this.scaler;
    this.context.fillRect(this.scaler, this.scaler);
  }
}

export default CanvasView;