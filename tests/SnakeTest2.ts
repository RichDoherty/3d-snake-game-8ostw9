import Snake from '../Snake';
import Point from '../Point';

describe("Point", function() {
  it("has a working getter for position", function() {
    let s = new Snake();
    expect(s.position).toBeDefined;
  });
  it("has a working getter for direction", function() {
    let s = new Snake();
    expect(s.direction).toBeDefined;
  });
  it("moves", function() {
    let s = new Snake();
    s.move(1);
    expect(s.position.y).toBe(1);
  });
  it("turns left", function() {
    let s = new Snake();
    s.turnLeft();
    expect(s.direction).toBe(2);
  });
  it("turns right", function() {
    let s = new Snake();
    s.turnRight();
    expect(s.direction).toBe(3);
  });
});