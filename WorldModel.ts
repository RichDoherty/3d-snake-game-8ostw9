import display from './display';
import Point from './Point';
import Snake from './Snake';
import View from './IView';
import CanvasView from './CanvasView';

/** Class representing the game world. */
class WorldModel {
  private worldSnake:Snake;
  private worldWidth: number;
  private worldHeight: number;
  private worldView: View|null;
  /**
   * Creates a world model.
   * @param startSnake - Snake to be used in the model.
   */
  constructor(startSnake:Snake) {
    this.worldSnake = startSnake;
    this.worldWidth = 10;
    this.worldHeight = 20;
    this.worldView = null;
  }
  /**
   * Moves the snake a certain distance.
   * @param steps - The number of spaces the snake will move.
   */
  public update(steps:number) {
    this.worldSnake.move(steps);
    if(this.worldView !== null) { this.worldView.display(this); }
  }
  /**
   * Gets the snake.
   */
  public get snake() {
    return this.worldSnake;
  }
  /**
   * Gets the width of the world.
   */
  public get width() {
    return this.worldWidth;
  }
  /**
   * Gets the width of the world.
   */
  public get height() {
    return this.worldHeight;
  }
  /**
   * Sets the world view to a new view that is passed.
   */
  public set view(newView:View) {
    this.worldView = newView;
  }
}

export default WorldModel;