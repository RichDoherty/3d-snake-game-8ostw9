import display from './display';
import Point from './Point';

// place your code on line 5 above the export statement below

/** Class representing a snake. */
class Snake {
  private currentParts: Point[];
  private currentDirection: number;
  private startPosition: Point;
  private size: number;
  /**
   * Creates a snake.
   */
  constructor() {
    this.startPosition = new Point(1,1);
    this.currentParts = [this.startPosition];
    this.currentDirection = 1;
    this.size = 3;
    for(let i = 0; i < this.size-1; i++) {
      this.currentParts.push(new Point(this.currentParts[i].x + 1, this.currentParts[i].y));
    }
  }
  /**
   * Moves the snake a number of spaces.
   * @param numOfSquares - the number of spaces the snake moves.
   */
  public move(numOfSquares:number) {
    for(let i = this.currentParts.length; i > 0; i--) {
      let replacer = this.currentParts[i-1];
      this.currentParts[i] = replacer;
    }
    if(this.currentDirection === 1) { this.currentParts[0] = new Point(this.currentParts[0].x, this.currentParts[0].y + numOfSquares) }
    else if(this.currentDirection === 2) { this.currentParts[0] = new Point(this.currentParts[0].x - numOfSquares, this.currentParts[0].y) }
    else if(this.currentDirection === 3) { this.currentParts[0] = new Point(this.currentParts[0].x + numOfSquares, this.currentParts[0].y) }
    else { this.currentParts[0] = new Point(this.currentParts[0].x, this.currentParts[0].y - numOfSquares) }
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
  public didCollide(s) {
    if(this.position === s.position) {
      return true;
    }
    else {
      return false;
    }
  }
  /**
   * Gets the point the snake is currently at.
   */
  public get position() {
    return this.currentParts[0];
  }
  /**
   * Gets the current direction of the snake.
   */
  public get direction() {
    return this.currentDirection;
  }
  
  public get allParts() {
    return this.currentParts;
  }
}

export default Snake;