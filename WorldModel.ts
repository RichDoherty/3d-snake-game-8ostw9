import display from './display';
import Point from './Point';
import Snake from './Snake';
import View from './IView';
import CanvasView from './CanvasView';

/** Class representing the game world. */
class WorldModel {
  private allSnakes: Snake[];
  private worldWidth: number;
  private worldHeight: number;
  private allViews: View[];
  /**
   * Creates a world model.
   * @param startSnake - Snake to be used in the model.
   */
  constructor() {
    this.allSnakes = [];
    this.worldWidth = 10;
    this.worldHeight = 20;
    this.allViews = [];
  }
  /**
   * Moves the snake a certain distance.
   * @param steps - The number of spaces the snake will move.
   */
  public update(steps:number) {
    for(let i = 0; i < this.allSnakes.length; i++) {
      this.allSnakes[i].move(steps);
    }
    for(let i = 0; i < this.allViews.length; i++) {
      if(this.allViews[i] !== null) { 
        this.allViews[i].display(this); 
      }
    }
  }
  /**
   * Gets the snake.
   */
  public get snakeList() {
    return this.allSnakes;
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
   * Adds a new snake to the list of snakes.
   */
  public addSnake(newSnake:Snake) {
    this.allSnakes.push(newSnake);
  }
  /**
   * Adds a new view to the list of views.
   */
  public addView(newView:View) {
    this.allViews.push(newView);
  }
}

export default WorldModel;