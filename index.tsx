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
import ActorCollisionHandlers from './ActorCollisionHandlers';
import SnakeFoodCollisionHandler from './SnakeFoodCollisionHandler';
import SnakeSnakeCollisionHandler from './SnakeSnakeCollisionHandler';
import ArrayIterator from './ArrayIterator';

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

let snakeTest = new Snake(5,6);
let ActorCollision = new ActorCollisionHandlers();
let SnakeFoodCollision = new SnakeFoodCollisionHandler();
let SnakeSnakeCollision = new SnakeSnakeCollisionHandler()
ActorCollision.addCollisionAction("snake", "food", SnakeFoodCollision);
ActorCollision.addCollisionAction("snake", "snake", SnakeSnakeCollision);
let world = new WorldModel(ActorCollision);
world.addSnake(snakeTest);

let avoidSnake = new Snake(2,6);
world.addSnake(avoidSnake);

let canvasTest = new CanvasView(20);
world.addView(canvasTest);
canvasTest.display(world);

const it = world.actorList;
let itemPair = it.next();

let sControl = new SnakeController(world, itemPair.value);
let sControl2 = new SnakeController(world, world.actorList[1]);
let gControl = new GameController(world);
let lrIh = new LRInputHandler;
let hPlayer = new HumanPlayer(sControl, lrIh);
let aPlayer = new AvoidWallsPlayer(sControl2);
gControl.player1 = hPlayer;
gControl.player2 = aPlayer;

/*
display(world.actorList[0].didCollide(world.actorList[1]));
display(world.actorList[1].didCollide(world.actorList[0]));
*/
/*
console.log(world.snakeList[0].position);
let parts1 = world.snakeList[0].allParts.slice(1);
console.log(parts1);
console.log(parts1[0]);
console.log(parts1[1]);
console.log(parts1[2]);

console.log("");

console.log(world.snakeList[1].position);
let parts2 = world.snakeList[1].allParts.slice(1);
console.log(parts2);
console.log(parts2[0]);
console.log(parts2[1]);
console.log(parts2[2]);

console.log("");

console.log(parts1.some(part => part.x === world.snakeList[1].position.x && part.y === world.snakeList[1].position.y));
*/

//gControl.run();

//canvasTest.dispose()

let array = [1, 2, 3, 4, 5];
const iterator = new ArrayIterator(array);

let itemPair2 = iterator.next();
while(!itemPair2.done) {
  display(itemPair2.value);
  itemPair = iterator.next();
}