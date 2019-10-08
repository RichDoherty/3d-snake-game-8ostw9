import Point from '../Point';
import Snake from '../Snake';
import WorldModel from '../WorldModel';

describe("World Model", function() {
  it("has a working update method", function() {
    let s = new Snake();
    let w = new WorldModel(s);
    w.update(5);
    expect(s.position.y).toBe(5);
  });
  it("has a working getter for the snake", function() {
    let s = new Snake();
    let w = new WorldModel(s);
    expect(w.snake).toBeDefined();
  });
  it("has a working getter for width", function() {
    let s = new Snake();
    let w = new WorldModel(s);
    expect(w.width).toBe(10);
  });
  it("has a working getter for height", function() {
    let s = new Snake();
    let w = new WorldModel(s);
    expect(w.height).toBe(20);
  });
});