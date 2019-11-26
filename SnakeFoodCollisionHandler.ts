import display from './display';
import Snake from './Snake';
import Food from './Food';
import CollisionHandler from './ICollisionHandler';

class SnakeFoodCollisionHandler implements CollisionHandler {
  public applyAction(snake:Snake, food:Food) {
    food.eat();
    snake.grow();
  }
}

export default SnakeFoodCollisionHandler;