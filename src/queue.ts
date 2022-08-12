export class Queue<T> {
  arr: T[] = [];

  get size(): number {
    return this.arr.length;
  }

  get peek(): T | undefined{
    if(this.arr[this.arr.length -1]){
      return this.arr[this.arr.length -1];
    }else{
      throw new Error("Not implemented");
    }
  }

  enqueue(t: T): void {
    this.arr.shift();
  }

  dequeue(): T | Number {
    if(this.arr.length){
      return this.arr.unshift();
    }else{
      throw new Error("Not implemented");
    }
  }
}
