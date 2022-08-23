interface Animal {
  name: string;
  type: "cat" | "dog";
}

export class Shelter {
  animalArray: Animal[]=[];
  //ENQUEUE FUNCTION
  enqueue(name: string, type: "cat" | "dog"): void {
   const newAnimal: Animal = {
    name: name,
    type: type,
   };
   this.animalArray.push(newAnimal);
  }
  //DEQUEUE FUNCTION
  dequeue(type?: "cat" | "dog"): any {
    if(this.animalArray.length === 0){
      throw Error("These are not the droids you are looking for...");
    }
    else{
      if(this.animalArray.length){
        for(let i=0; i < this.animalArray.length; i++){
          if(this.animalArray[i].type === type){
            return this.animalArray.splice(i,1)[0].name;
          }
        }
      }
      if(type === undefined){
        return this.animalArray.shift()?.name;
      }
    }
  }
}
