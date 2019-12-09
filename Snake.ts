import display from './display';
import Point from './Point';
import Collidable from './ICollidable'

// place your code on line 5 above the export statement below

/** Class representing a snake. */
class Snake implements Collidable {
  private currentParts: Point[];
  private currentDirection: number;
  private startPosition: Point;
  private size: number;
  private isCurrentlyActive: boolean;
  /**
   * Creates a snake.
   */
  constructor(xcoord:number, ycoord:number) {
    this.startPosition = new Point(xcoord, ycoord);
    this.currentParts = [this.startPosition];
    this.currentDirection = 1;
    this.size = 4;
    this.isCurrentlyActive = true;
    for(let i = 0; i < this.size-1; i++) {
      this.currentParts.push(new Point(this.currentParts[i].x, this.currentParts[i].y - 1));
    }
  }
  /**
   * Moves the snake a number of spaces.
   * @param numOfSquares - the number of spaces the snake moves.
   */
  public move(numOfSquares:number) {
    for(let i = this.currentParts.length-1; i > 0; i--) {
      this.currentParts[i] = this.currentParts[i-1];
    }
    if(this.currentDirection === 1) { this.currentParts[0] = new Point(this.currentParts[0].x, this.currentParts[0].y + numOfSquares) }
    else if(this.currentDirection === 2) { this.currentParts[0] = new Point(this.currentParts[0].x - numOfSquares, this.currentParts[0].y) }
    else if(this.currentDirection === 3) { this.currentParts[0] = new Point(this.currentParts[0].x + numOfSquares, this.currentParts[0].y) }
    else { this.currentParts[0] = new Point(this.currentParts[0].x, this.currentParts[0].y - numOfSquares) }
  }
  /**
   * Turns the snake right.
   */
  public turnRight() {
    if(this.currentDirection === 1) { this.currentDirection = 2 }
    else if(this.currentDirection === 2) { this.currentDirection = 4 }
    else if(this.currentDirection === 3) { this.currentDirection = 1 }
    else { this.currentDirection = 3 }
  }
  /**
   * Turns the snake left.
   */
  public turnLeft() {
    if(this.currentDirection === 1) { this.currentDirection = 3 }
    else if(this.currentDirection === 2) { this.currentDirection = 1 }
    else if(this.currentDirection === 3) { this.currentDirection = 4 }
    else { this.currentDirection = 2 }
  }
  
  public didCollide(s) {
    if(s.type !== "snake") {
      return this.position.equals(s.position);
    }
    else if(this !== s) {
      let parts = s.allParts.slice(1);
      return parts.some(this.position.equals.bind(this.position)) || this.position.equals(s.position);
    }
    else {
      let parts = s.allParts.slice(1);
      return parts.some(this.position.equals.bind(this.position));
    }
  }

  public update() {
    this.move(1);
  }

  public die() {
    this.isCurrentlyActive = false;
  }

  public grow() {
    if(this.currentDirection === 1) {
      this.allParts.push(new Point(this.position.x, this.position.y - 1));
    }
    else if(this.currentDirection === 4) {
      this.allParts.push(new Point(this.position.x, this.position.y + 1));
    }
    else if(this.currentDirection === 2) {
      this.allParts.push(new Point(this.position.x + 1, this.position.y));
    }
    else if(this.currentDirection === 3) {
      this.allParts.push(new Point(this.position.x - 1, this.position.y));
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

  public get isActive() {
    return this.isCurrentlyActive;
  }

  public get type() {
    return "snake";
  }

  public get allParts() {
    return this.currentParts;
  }
}

export default Snake;