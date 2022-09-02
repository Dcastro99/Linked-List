

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

}

module.exports = { Node, BinaryTree };
