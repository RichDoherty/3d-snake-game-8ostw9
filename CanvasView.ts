import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'
import Player from './Player';
import View from './IView';
import ArrayIterator from './ArrayIterator'

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
    this.context.fillStyle = this.canvas.color;
    this.canvas.width = w.width * this.scaler;
    this.canvas.height = w.height * this.scaler;
    this.context.fillStyle = "lavender";
    const it = w.actorList;
    let itemPair = it.next();
    for( ; !itemPair.done ; ) {
      this.context.fillRect(itemPair.value.allParts.x * this.scaler, itemPair.value.allParts.y * this.scaler, this.scaler, this.scaler);
      itemPair = it.next();
    }
  }
  public dispose() {
    document.body.removeChild(this.canvas);
  }
}

export default CanvasView;