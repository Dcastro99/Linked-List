function wordsUsedMost(str) {
  let lower = str.toLowerCase();
  let words = lower.split(/\W+/g);
  let map = new Map();

  for (const word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }

  let highestValue = getHighestValue(map);
  return highestValue;

}

// ----------HELPER FUNCTION -----------//
function getHighestValue(hashMap) {

  let string = '';
  let object = { key: string, value: 0 };

  for (const item of hashMap.entries()) {
    if (item[1] > object.value) {
      object['key'] = item[0];
      object['value'] = item[1];
    }
  }
  return object;
}


module.exports = wordsUsedMost;
