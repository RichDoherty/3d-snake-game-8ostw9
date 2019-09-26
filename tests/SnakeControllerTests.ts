import Snake from '../Snake';
import WorldModel from '../WorldModel';
import SnakeController from '../SnakeController'

describe("Snake Controller", function() {
  it("turns Left", function() {
    let s = new Snake();
    let w = new WorldModel(s);
    let sc = new SnakeController(w, s);
    sc.turnSnakeLeft()
    expect(sc.snakeDirection).toBe(2);
  }) 
  it("turns right", function() {
    let s = new Snake();
    let w = new WorldModel(s);
    let sc = new SnakeController(w, s);
    sc.turnSnakeRight()
    expect(sc.snakeDirection).toBe(3);
  }) 
  it("has a working getter for position", function() {
    let s = new Snake();
    let w = new WorldModel(s);
    let sc = new SnakeController(w, s);
    expect(sc.snakePosition).toBeDefined();
  });
  it("has a working getter for direction", function() {
    let s = new Snake();
    let w = new WorldModel(s);
    let sc = new SnakeController(w, s);
    expect(sc.snakeDirection).toBeDefined();
  });
  it("has a working getter for world width", function() {
    let s = new Snake();
    let w = new WorldModel(s);
    let sc = new SnakeController(w, s);
    expect(sc.worldWidth).toBeDefined();
  });
  it("has a working getter for world height", function() {
    let s = new Snake();
    let w = new WorldModel(s);
    let sc = new SnakeController(w, s);
    expect(sc.worldHeight).toBeDefined();
  });
});