import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'
import Player from './Player';
import View from './IView';

/** Class that adds a canvas for the game to be played on. */
class CanvasView implements View {
  private canvas;
  private context;
  private scaler:number;
  /**
   * Creates a canvas.
   * @param scaler - Number that adjusts the heights and widths of the snakes and canvas.
   */
  constructor(scaler:number) {
    this.scaler = scaler;
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");
  }
  /**
   * Multiplies the world's width and height by the scaler and makes the snake appear on the canvas.
   */
  public display(w:WorldModel) {
    this.canvas.width = w.width * this.scaler;
    this.canvas.height = w.height * this.scaler;
    this.context.fillStyle = this.canvas.color;
    this.context.fillStyle = "green";
    this.context.fillRect(2 * this.scaler, 2 * this.scaler, this.scaler, this.scaler);
  }
}

export default CanvasView;