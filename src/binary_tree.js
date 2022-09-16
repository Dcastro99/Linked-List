

// const preOrderOneLine = (root) =>
//   root ? [root.value, ...preOrder(root.left), ...preOrder(root.right)] : [];

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
  }
  //PRE-ORDER>>>>>>>>>>>>>
  preOrder() {
    // Root, Left, Right
    // Return a single array
    let traversal = [];
    traversal.push(this.value); // Root

    if (this.left) {
      // Left
      let leftTraversal = this.left.preOrder();
      traversal = traversal.concat(leftTraversal);
    }

    // Right
    if (this.right) {
      let rightTraversal = this.right.preOrder();
      traversal = traversal.concat(rightTraversal);
    }

    return traversal;
  }
  //IN-ORDER>>>>>>>>>>>>>
  inOrder() {
    //Left, Root, Right
    let traversal = [];
    traversal.push(this.value); // Root
    if (this.left) {
      // Left
      let leftTraversal = this.left.inOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    // Right
    if (this.right) {
      let rightTraversal = this.right.inOrder();
      traversal = [...traversal, ...rightTraversal];
    }
    return traversal;
  }
  //POST-ORDER>>>>>>>>>>>>>
  postOrder() {
    //Left,Right, Root
    let traversal = [];
    traversal.push(this.value); // Root

    // Right
    if (this.right) {
      let rightTraversal = this.right.postOrder();
      traversal = [...rightTraversal, ...traversal];
    }

    if (this.left) {
      // Left
      let leftTraversal = this.left.postOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    return traversal;
  }

  max() {
    let traversal = [];
    traversal.push(this.value); // Root

    // Right
    if (this.right) {
      let rightTraversal = this.right.postOrder();
      traversal = [...rightTraversal, ...traversal];
    }

    if (this.left) {
      // Left
      let leftTraversal = this.left.postOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    return Math.max(...traversal);
  }

  fizzBuzzNode(node) {
    if (!node.value) {
      return undefined;
    }
    if (node.value % 3 === 0 && node.value % 5 !== 0) {
      node.value = 'Fizz';
    }
    if (node.value % 5 === 0 && node.value % 3 !== 0) {
      node.value = 'Buzz';
    }
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'FizzBuzz';
    } else {
      return node.value += ''; // the secret way to make a string from a number
    }

  }


  fizzBuzzTree() {

    if (this.value === undefined) {
      return;
    }
    // q = my queue
    let q = [];
    // arr = returns full array of how it was traversed.
    let arr = [];
    this.fizzBuzzNode(this);
    // Create our queue and push our root node into it.
    q.push(this);

    // Continue searching through as queue as long as it's not empty.
    while (q.length > 0) {
      // Create a reference to currentNode, at the top of the queue.
      let currentNode = q.shift();// Remove the currentNode from the queue.
      this.fizzBuzzNode(currentNode);

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


}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    return this.root.preOrder();
  }
  inOrder() {
    return this.root.inOrder();
  }
  postOrder() {
    return this.root.postOrder();
  }
  max() {
    return this.root.max();
  }
  fizzBuzzNode() {
    return this.root.fizzBuzzNode();
  }

  fizzBuzzTree() {
    return this.root.fizzBuzzTree();
  }

}

module.exports = { Node, BinaryTree };
