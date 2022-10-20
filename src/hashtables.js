class HashMap {
  constructor(size) {
    this.size = size; // track size
    this.map = new Array(size).fill(); // create a new array which will be used for our 'map'
  }

  // adds new object to hashMap
  set(key, value) {
    // create a hashed index to random insert each key/value pair
    let hashedKey = this.hash(key);

    const object = {};
    object['key'] = key;
    object['value'] = value;

    // if array already exist in map[hashedKey], push object
    if (this.map[hashedKey]) {
      this.map[hashedKey].push(object);
    } else {
      // push
      this.map[hashedKey] = new Array();
      this.map[hashedKey].push(object);
    }
  }

  // return the values for the key
  get(key) {
    // get hashed index so we can look up values at that index
    let hashedKey = this.hash(key);
    if (this.map[hashedKey]) {
      // console.log('---------this.map[hashedKey]--------', this.map[hashedKey]);
      return this.map[hashedKey]; // returns all the values at this nested array
    } else {
      return undefined;
    }
  }

  // returns a boolean true if the key exists in the hashMap
  has(key) {
    let hashedKey = this.hash(key);
    return this.map[hashedKey];
  }

  // retrieves all unique keys in the hashMap
  keys() {
    let set = new Set();
    let results = [];
    for (let i = 0; i < this.map.length; i++) {
      // check if the sub array at index[i] is greater than one element & map through that subarray
      if (this.map[i] !== undefined) {
        if (this.map[i].length > 1) {
          this.map[i].map(x => {
            if (!set.has(x.key)) {
              set.add(x.key);
            }
          });
        } else {
          if (!set.has(this.map[i][0].key)) {
            set.add(this.map[i][0].key);
          }
        }
      }
    }
    set.forEach(element => {
      results.push(element);
    });
    return results;
  }


  // takes in a key 'string', converts to random number between 0 and map.length
  hash(key) {
    // loop through our string each character at a time, grab unicode value, add to previous value, then calculate hashed index
    let sum = key.split('').reduce((accumulate, current) => {
      let unicodeValue = current.charCodeAt(0);
      let total = accumulate + unicodeValue;
      return total;
    }, 0);
    let hashedKey = sum * 599 % this.size;
    return hashedKey;
  }
}

module.exports = HashMap;
