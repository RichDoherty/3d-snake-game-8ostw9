import display from './display';
import Snake from './Snake';
import Food from './Food';
import CollisionHandler from './ICollisionHandler';

class SnakeSnakeCollisionHandler implements CollisionHandler {
  public applyAction(snake1:Snake, snake2:Snake) {
    snake1.die();
  }
}

export default SnakeSnakeCollisionHandler;