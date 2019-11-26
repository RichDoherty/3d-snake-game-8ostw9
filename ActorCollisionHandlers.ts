import display from './display';
import Snake from './Snake';
import Food from './Food';
import Actor from './IActor';
import CollisionHandler from './ICollisionHandler';
import SnakeFoodCollisionHandler from './SnakeFoodCollisionHandler';
import SnakeSnakeCollisionHandler from './SnakeSnakeCollisionHandler';

class ActorCollisionHandlers{
  private pairs;
  constructor() {
    this.pairs = new Map();
  }
  private toKey(colliderType:string, collidedType:string) {
    return colliderType + "," + collidedType;
  }
  public addCollisionAction(colliderType, collidedType, actionApplicator) {
    let key = this.toKey(colliderType, collidedType);
    this.pairs.set(key, actionApplicator);
  }
  public hasCollisionAction(colliderType, collidedType) {
    return this.pairs.has(this.toKey(colliderType, collidedType));
  }
  public applyCollisionAction(collider, collided) {
    if(this.hasCollisionAction(collider, collided)) {
      this.pairs.get(this.toKey(collider, collided)).applyAction(collider, collided); 
    }
  }
}

export default ActorCollisionHandlers;