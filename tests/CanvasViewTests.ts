import display from '../display';
import Snake from '../Snake';
import WorldModel from '../WorldModel';
import SnakeController from '../SnakeController'
import Player from '../Player';
import View from '../IView';
import CanvasView from '../CanvasView';

describe("Canvas View", function() {
  it("exists", function() {
    let s = new Snake();
    let w = new WorldModel();
    w.addSnake(s);
    let c = new CanvasView(15);
    expect(c).toBeDefined();
  })
  it("has the proper height", function() {
    let s = new Snake();
    let w = new WorldModel();
    w.addSnake(s);
    let c = new CanvasView(15);
    expect(c.height).toBe(300);
  })
  it("has the proper width", function() {
    let s = new Snake();
    let w = new WorldModel();
    w.addSnake(s);
    let c = new CanvasView(15);
    expect(c.width).toBe(150);
  })
})