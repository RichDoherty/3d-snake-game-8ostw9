import display from './display';

class Point {
  private xcoord: number;
  private ycoord: number;
  constructor(x, y) {
    this.xcoord = x;
    this.ycoord = y;
  }
  public get x() {
    return this.xcoord;
  }
  public get y() {
    return this.ycoord;
  }
}

export default Point;