
// const inOrderOneLine = (root) =>
//   root ? [...inOrderOneLine(root.left), root.value, ...inOrderOneLine(root.right)] : [];


class Node1 {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
  }

  inOrderOneLine = (root) => root ? [...this.inOrderOneLine(root.left), root.value, ...this.inOrderOneLine(root.right)] : [];


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

}

class BinaryTree1 {
  constructor(root) {
    this.root = root;
  }
  inOrderOneLine() {
    return this.root.inOrderOneLine(this.root);
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

module.exports = { Node1, BinaryTree1 };
