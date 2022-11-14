function repeatedWord(str, totalCount = false, freq = 1) {
  let found = false;
  let firstWord = '';
  let lower = str.toLowerCase();
  let words = escapeRegExp(lower);
  const map = new Map([]);

  // return the first word to occur more than once
  if (totalCount === false) {
    words.forEach((item) => {
      // run until we find the first word with more that occurs for than once.
      if (!found) {
        // if the word is not in our map, add it to the map and give it a value of 1.
        if (!map.has(item)) {
          map.set(item, 1);
        }
        // if the word is already in the map, get the value- if the value is equal to 2, break out of the loop and return the firstWord.
        if (map.get(item) === freq) {
          firstWord = item;
          found = true;
        } else {
          // increment the value for the word
          let count = map.get(item);
          map.set(item, count + 1);
        }
      }
    });
    return firstWord;
  } else {
    if (totalCount === true) { // it total count is set to true, then return the work that occurs the most throughout the string array
      words.forEach((item) => {
        if (!map.has(item)) {
          map.set(item, 1);
        } else {
          let count = map.get(item);
          map.set(item, count + 1);
        }
      });
      let highestValue = getHighestValue(map);
      return highestValue;
    }
  }
}


// helper functions

// removes all special characters from strings
function escapeRegExp(text) {
  let results = [];
  let word = text.split(' ');
  for (let i = 0; i < word.length; i++) {
    results.push(word[i].replace(/[^\w\s]/gi, ''));
  }
  return results;
}

// returns the string the occurs the most in our string array
function getHighestValue(hashMap) {
  // let max = 0;
  let string = '';
  let object = { key: string, value: 0 };

  for (const item of hashMap.entries()) {
    // console.log('index; ', item);
    if (item[1] > object.value) {
      object['key'] = item[0];
      object['value'] = item[1];
      console.log('object: ', object);
    } else {
      if (item[1] === object.value) {
        if (item[0].length > object.key.length) {
          object.key = item[0];
          object.value = item[1];
        }
      }
    }
  }
  return object;
}

module.exports = repeatedWord;
