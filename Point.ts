import display from './display';

class Point {
  private xcoord: number;
  private ycoord: number;
  constructor(x, y) {
    this.xcoord = x;
    this.ycoord = y;
  }
  public get xcoordinate() {
    return this.xcoord;
  }
  public get ycoordinate() {
    return this.ycoord;
  }
}

export default Point;