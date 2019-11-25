import display from './display';
import Snake from './Snake';
import Food from './Food';
import CollisionHandler from './ICollisionHandler';

class SnakeFoodCollisionHandler implements CollisionHandler {
  applyAction(snake:Snake, food:Food) {
    food.eat();
    snake.grow();
  }
}