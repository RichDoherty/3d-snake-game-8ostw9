import display from './display';
import Point from './Point';
import Snake from './Snake';
import View from './IView';
import CanvasView from './CanvasView';
import Actor from './IActor';
import CollisionHandler from './ICollisionHandler';
import SnakeFoodCollisionHandler from './SnakeFoodCollisionHandler';
import SnakeSnakeCollisionHandler from './SnakeSnakeCollisionHandler';
import ActorCollisionHandlers from './ActorCollisionHandlers';
import ArrayIterator from './ArrayIterator';
import Food from './Food';

/** Class representing the game world. */
class WorldModel {
  private actors: Actor[];
  private worldWidth: number;
  private worldHeight: number;
  private allViews: View[];
  /**
   * Creates a world model.
   */
  constructor(aca) {
    this.actors = [];
    this.worldWidth = 10;
    this.worldHeight = 20;
    this.allViews = [];
  }
  /**
   * Moves the snake a certain distance.
   * @param steps - The number of spaces the snake will move.
   */
  public update(steps:number) {
    let deadSnakes: Snake[] = [];
    for(let i = 0; i < this.actors.length; i++) {
      this.actors[i].move(steps);
    }
    for(let i = 0; i < this.allViews.length; i++) {
      if(this.allViews[i] !== null) { 
        this.allViews[i].display(this); 
      }
    }
    for(let i = 0; i < this.actors.length; i++) {
      for(let j = 0; j < this.actors.length; j++) {
        if(this.actors[i].didCollide(this.actors[j]) && !(deadSnakes.some(snake => snake === this.actors[i]))) {
          deadSnakes.push(this.actors[i]);
        }
      }
    }
    for(let i = 0; i < deadSnakes.length; i++) {
      for(let j = 0; j < this.actors.length; j++) {
        if(deadSnakes[i] === this.actors[j]) {
          this.actors.splice(j, 1);
        }
      }
    }
    if(this.actors.filter(act => act.type === "food").length === 0) {
      let newFood = new Food(Math.floor(this.worldWidth*Math.random()),Math.floor(this.worldHeight*Math.random()));
      this.actors.push(newFood);
    }
  }

  public reset() {
    for(let i = 0; i < this.allViews.length; i++) {
      this.allViews[i].dispose();
    }
    this.actors = [];
    this.allViews = [];
  }
  /**
   * Gets the list of snakes.
   */
  public get actorList() {
    return new ArrayIterator(this.actors);
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
  public addSnake(newSnake:Actor) {
    this.actors.push(newSnake);
  }
  /**
   * Adds a new view to the list of views.
   */
  public addView(newView:View) {
    this.allViews.push(newView);
  }
}

export default WorldModel;