import Point from '../Point';

describe("Point", function() {
  it("exists", function() {
    let p = new Point(0,0);
    expect(p.x).toBeDefined();
  });
});