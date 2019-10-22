import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import display from './display';
import Snake from './Snake';
import SnakeTests from './SnakeTests';
import WorldModel from './WorldModel';
import View from './IView';
import CanvasView from './CanvasView';
import SnakeController from './SnakeController';
import GameController from './GameController';
import HumanPlayer from './HumanPlayer';
import InputHandler from './IInputHandler';
import LRInputHandler from './LRInputHandler';
import AvoidWallsPlayer from './AvoidWallsPlayer';

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

let snakeTest = new Snake();
let world = new WorldModel();
world.addSnake(snakeTest);

let avoidSnake = new Snake();
world.addSnake(avoidSnake);

let canvasTest = new CanvasView(20);
world.addView(canvasTest);
canvasTest.display(world);

let sControl = new SnakeController(world, snakeTest);
let sControl2 = new SnakeController(world, avoidSnake);
let gControl = new GameController(world);
let lrIh = new LRInputHandler;
let hPlayer = new HumanPlayer(sControl, lrIh);
let aPlayer = new AvoidWallsPlayer(sControl2);
gControl.player1 = hPlayer;
gControl.player2 = aPlayer;

//display(world.copy())

//gControl.run();