import display from './display';
import Snake from './Snake';
import Food from './Food';

class ArrayIterator {
  private arr:[];
  private index:number;
  constructor(array:[]) {
    this.arr = array;
    this.index = 0;
  }
  public next() {
    let obj = {value: this.arr[this.index], done: this.index === this.arr.length};
    let objVal = obj.value;
    this.index = this.index + 1;
    return obj;
  }
}

export default ArrayIterator;