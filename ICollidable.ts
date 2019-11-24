import display from './display';
import Snake from './Snake';
import Actor from './IActor';

interface Collidable extends Actor {
  didCollide: () => boolean;
}

export default ICollidable;