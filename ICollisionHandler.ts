import display from './display';
import Snake from './Snake';
import Actor from './IActor';

interface CollisionHandler {
  applyAction: (actor:Actor, actor2:Actor) => void;
}

export default CollisionHandler;