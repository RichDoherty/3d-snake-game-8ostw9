import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import display from './display';
import Snake from './Snake';
import SnakeTests from './SnakeTests';
import WorldModel from './WorldModel';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <pre id="output">
          OUTPUT: <br />
        </pre>
        {
           // <SnakeTests />
        }
        {
          // <DuckTests />
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

// Add display statements below
display("Let's get started with React TypeScript!");

let snake1 = new Snake;
display(JSON.stringify(snake1.position));
snake1.move(1);
snake1.turnLeft();
snake1.move(1);
display(JSON.stringify(snake1.position));
snake1.move(1);
snake1.turnLeft();
snake1.move(1);
snake1.move(1);
display(JSON.stringify(snake1.position));
snake1.turnRight();
snake1.move(1);
snake1.move(1);
snake1.turnRight();
snake1.move(1);
snake1.move(1);
snake1.turnRight();
snake1.move(1);
snake1.move(1);
snake1.turnRight();
snake1.move(1);
snake1.move(1);
display(JSON.stringify(snake1.position));

display("");

let snake2 = new Snake();
let worldModel = new WorldModel(snake2);
worldModel.update(1);
snake2.turnLeft();
worldModel.update(1);
display(worldModel.getSnake);