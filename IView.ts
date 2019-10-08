import display from './display';
import Snake from './Snake';
import WorldModel from './WorldModel';
import SnakeController from './SnakeController'

/** Interface  */
interface View {
  display: (w:WorldModel) => void;
}

export default View;