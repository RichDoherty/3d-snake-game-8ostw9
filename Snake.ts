import display from './display';
import Point from './Point';

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: Point;
  private currentDirection: number;
  constructor() {
    this.currentPosition = new Point(0, 0);
    this.currentDirection = 1;
  }
  public move(numOfSquares:number) {
    if(this.currentDirection === 1) { this.currentPosition = this.currentPosition + numOfSquares }
    else { this.currentPosition = this.currentPosition - numOfSquares }
  }
  public turnLeft() {
    if(this.currentDirection === 1) { this.currentDirection = 2 }
    else if(this.currentDirection === 2) { this.currentDirection = 4 }
    else if(this.currentDirection === 3) { this.currentDirection = 1 }
    else { this.currentDirection = 3 }
  }
  public turnRight() {
    if(this.currentDirection === 1) { this.currentDirection = 3 }
    else if(this.currentDirection === 2) { this.currentDirection = 1 }
    else if(this.currentDirection === 3) { this.currentDirection = 4 }
    else { this.currentDirection = 2 }
  }
  public get position() {
    return this.currentPosition;
  }
}

export default Snake;