import display from './display';

/** Class representing the point a snake is at. */
class Point {
  private xcoord: number;
  private ycoord: number;
  /**
   * Creates a new point.
   * @param x - starting x-value
   * @param y - starting y-value
   */
  constructor(x:number, y:number) {
    this.xcoord = x;
    this.ycoord = y;
  }
  public equals(p) {
    if(this.xcoord === p.x && this.ycoord === p.y) { return true; }
    else { return false; }
  }
  /**
   * Gets the current x-value.
   */
  public get x() {
    return this.xcoord;
  }
  /**
   * Gets the current y-value.
   */
  public get y() {
    return this.ycoord;
  }
}

export default Point;