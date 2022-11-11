let mergedMap = [];

function leftJoin(L, R) {
  if (L && R !== undefined) {
    for (const [key, value] of L) {

      mergedMap.push([key, value]);
      // console.log('L',leftArr)
    }

    for (let i in mergedMap) {
      if (R.has(mergedMap[i][0])) {
        const value = R.get(mergedMap[i][0]);
        mergedMap[i].push(value);
      } else {
        mergedMap[i].push(null);
      }
    }

  }
  else {

    for (const [key, value] of R) {
      mergedMap.push([key, value]);
    }
    for (let i in mergedMap) {
      if (L.has(mergedMap[i][0])) {
        const value = L.get(mergedMap[i][0]);
        mergedMap[i].push(value);
      } else {
        mergedMap[i].push(null);
      }
    }
  }
  return mergedMap;
}

module.exports = leftJoin;

