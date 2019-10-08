import display from './display';
import Point from './Point';

// place your code on line 5 above the export statement below

/** Class representing a snake. */
class Snake {
  private currentPosition: Point;
  private currentDirection: number;
  /**
   * Creates a snake.
   */
  constructor() {
    this.currentPosition = new Point(0, 0);
    this.currentDirection = 1;
  }
  /**
   * Moves the snake a number of spaces.
   * @param numOfSquares - the number of spaces the snake moves.
   */
  public move(numOfSquares:number) {
    if(this.currentDirection === 1) { this.currentPosition = new Point(this.currentPosition.x, this.currentPosition.y + numOfSquares) }
    else if(this.currentDirection === 2) { this.currentPosition = new Point(this.currentPosition.x - numOfSquares, this.currentPosition.y) }
    else if(this.currentDirection === 3) { this.currentPosition = new Point(this.currentPosition.x + numOfSquares, this.currentPosition.y) }
    else { this.currentPosition = new Point(this.currentPosition.x, this.currentPosition.y - numOfSquares) }
  }
  /**
   * Turns the snake left.
   */
  public turnLeft() {
    if(this.currentDirection === 1) { this.currentDirection = 2 }
    else if(this.currentDirection === 2) { this.currentDirection = 4 }
    else if(this.currentDirection === 3) { this.currentDirection = 1 }
    else { this.currentDirection = 3 }
  }
  /**
   * Turns the snake right.
   */
  public turnRight() {
    if(this.currentDirection === 1) { this.currentDirection = 3 }
    else if(this.currentDirection === 2) { this.currentDirection = 1 }
    else if(this.currentDirection === 3) { this.currentDirection = 4 }
    else { this.currentDirection = 2 }
  }
  /**
   * Gets the point the snake is currently at.
   */
  public get position() {
    return this.currentPosition;
  }
  /**
   * Gets the current direction of the snake.
   */
  public get direction() {
    return this.currentDirection;
  }
}

export default Snake;