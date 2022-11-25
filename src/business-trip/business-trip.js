function businessTrip(graph, inputArr) {
  let total = 0;
  let neighbors;


  for (let [i, value] of inputArr.entries()) {
    neighbors = graph.getNeighborsForBusinessTrip(value);
    for (const item of neighbors) {
      if (item.node.value === inputArr[i + 1]) {
        total += item.weight;
        continue;
      } else {
        return 'null';
      }
    }
  }
  if (total === 0) {
    return 'null';
  } else {
    return `$${total}`;
  }
}

module.exports = businessTrip;
