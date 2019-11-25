import display from './display';
import Snake from './Snake';

interface CollisionHandler {
  applyAction: () => void;
}

export default CollisionHandler;