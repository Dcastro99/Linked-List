// // Your linked list from earlier labs
// class LinkedList<V> {}

// export class HashTable<V> {
//   private data: Array<LinkedList<[string, V]>>;

//   constructor(readonly capacity: number) {
//     this.data = new Array(this.capacity);
//   }

//   get(key: string): V | never {
//     console.log('get was called')
//     let idx = this.hash(key);
//     if(this.data[idx]){
//       console.log('GET KEYS ----> ', this.data[idx]);
//       const element = this.data[idx]
//       console.log('GET ELEMENT: ', element);
//       return element;
//     } else {
//       return undefined;
//     }
//     // throw new Error("Unimplemented");
//   }

//   set(key: string, value: V): void {
//     console.log('set was called')
//     let idx =this.hash(key);

//     let obj = [key, value];

//     if(this.data[idx]){
//       // this.map[idx].push([key, value]);
//       this.data[idx].push(obj);
//       // this.map[hashIndex] = new Array(); // create a new array at hashIndex
//     } else {
//       this.data[idx] = [[key, value]];
//     }
//     // throw new Error("Unimplemented");

//   }

//   has(key: string): boolean {
//     let hashIndex = this.hash(key);
//     console.log('has was called');
//     if(this.data[hashIndex] !== undefined){
//       return true;
//     } else {
//       return false;
//     }


//     // throw new Error("Unimplemented");
//   }

//   keys(key: string): string[] {
//     let hashIndex = this.hash(key);
//     console.log('keys was called');
//     if(this.data[hashIndex] !== undefined){
//       // console.log(this.map[hashIndex].length, ' keys in that index');
//       // console.log('map[hashIndex] ---> ', this.map[hashIndex])
//       return true;
//     } else {
//       return false;
//     }
//     // throw new Error("Unimplemented");
//   }

//   hash(key: string): number {
//     let sumOfKeyLetters = key.split('').reduce((total, currentValue) => {
//       let value = currentValue.charCodeAt(0);
//       // console.log('value: ', value, ' total: ', total);
//       let num = total + value;
//       // console.log('num: ', total, ' num: ', num);
//       return num;
//     }, 0);
//     let hash = sumOfKeyLetters * 599 % this.capacity;
//     return hash;
//   }
//     // throw new Error("Unimplemented");

// }
