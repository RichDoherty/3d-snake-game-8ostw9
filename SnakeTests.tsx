import * as React from 'react';
import Snake from './Snake';
import Test from './Test';
import TestSuite from './TestSuite';

const moveSnakes = (times:number, turn:boolean=false) => {
  const greenSnake = new Snake("green");
  const maroonSnake = new Snake("maroon");
  let totalSquares = 0;

  for(let i = 0; i < times; i++) {
    const numSquares1 = Math.floor(Math.random()*100);
    const numSquares2 = Math.floor(Math.random()*100);
    greenSnake.move(numSquares1);
    maroonSnake.move(numSquares2);
    greenSnake.move(5);
    totalSquares += numSquares2;
    if(turn) {
      const numSquares3 = Math.floor(Math.random()*100);
      const numSquares4 = Math.floor(Math.random()*10);
      greenSnake.turn();
      maroonSnake.turn();
      maroonSnake.move(numSquares3);
      totalSquares -= numSquares3;
      greenSnake.move(numSquares3);
      maroonSnake.turn();
      maroonSnake.turn();
      maroonSnake.turn();
      maroonSnake.move(numSquares4);
      totalSquares += numSquares4;
    }
  }
  
  return {actual: maroonSnake.position, expected: totalSquares};
};

class SnakeTests extends React.Component<any, {loaded: boolean}> {
  public constructor(props: any) {
    super(props);
    this.state = {loaded: false};
  }
  public componentDidMount() {
    this.setState(state => ({
      loaded: true
    }));
  }
  public render() {
    if(this.state.loaded) {
      const test1 = moveSnakes(0);
      const test2 = moveSnakes(3);
      const test3 = moveSnakes(10);
      const test4 = moveSnakes(0);
      const test5 = moveSnakes(4, true);
      return (
        <TestSuite suitename="Snake Tests">
          <Test testname = "initial moves value" expected = {0} actual = {test1.actual}/>
          <Test testname = "testing move 3 times" expected = {test2.expected} actual = {test2.actual}/>
          <Test testname = "testing move 10 times" expected = {test3.expected} actual = {test3.actual}/>
          <Test testname = "testing move 0 times with turns" expected = {test4.expected} actual = {test4.actual}/>
          <Test testname = "testing move 4 times with turns" expected = {test5.expected} actual = {test5.actual}/>
        </TestSuite>
      );
    } else {
      return null;
    }
  }
}

export default SnakeTests;