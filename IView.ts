import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'

/** Interface for views */
interface View {
  display: (w:WorldModel) => void;
  dispose: () => void;
}

export default View;