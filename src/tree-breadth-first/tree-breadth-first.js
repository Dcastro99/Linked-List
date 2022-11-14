function breadthFirst(tree) {

  if (tree === undefined) {
    return;
  }
  // q = my queue
  let q = [];
  // arr = returns full array of how it was traversed.
  let arr = [];

  // Create our queue and push our root node into it.
  q.push(tree.root);

  // Continue searching through as queue as long as it's not empty.
  while (q.length > 0) {
    // Create a reference to currentNode, at the top of the queue.
    let currentNode = q.shift();// Remove the currentNode from the queue.
    arr.push(currentNode.value);
    // If currentNode has a left child node, add it to the queue.
    if (currentNode.left !== undefined) {
      q.push(currentNode.left);
    }
    // If currentNode has a right child node, add it to the queue.
    if (currentNode.right !== undefined) {
      q.push(currentNode.right);
    }
  }
  return arr;
}



class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
  }
}

breadthFirst();
module.exports = { Node, breadthFirst };
