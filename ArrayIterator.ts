import display from './display';
import Snake from './Snake';
import Food from './Food';

class ArrayIterator<T> {
  private arr:T[];
  private index:number;
  constructor(array:T[]) {
    this.arr = array;
    this.index = 0;
  }
  public next() {
    let obj = {value: this.arr[this.index], done: this.index === this.arr.length};
    if(this.index !== this.arr.length) {
    this.index = this.index + 1;
    }
    return obj;
  }
}

export default ArrayIterator;