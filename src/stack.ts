export class Stack<T> {
 arr: T[] = [];


  get size(): number {
return this.arr.length;
    // throw new Error("Not implemented");
  }

  get peek(): T | undefined{
    if(this.arr[this.arr.length -1]){
      return this.arr[this.arr.length -1];
    }else{
      throw new Error("Not implemented");
    }
  }

  push(t: T): void {
    this.arr.push(t);
  }

  pop(): T | undefined {
    if(this.arr.length){
      return this.arr.pop();
    }else{
      throw new Error("Not implemented");
    }
  }
}



