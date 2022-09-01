
add(number, node) {
  console.log("we are here: ", number, node);
  if (node === undefined) {
    return this.add(number, new Node(number));
  }
  if (node.value === number) {

    return node;
  }
  if (number < node.value) {
    return this.add(number, node.left);
  }
  if (number > node.value) {
    return this.add(number, node.right);
  }
}


// Method to insert a node in a tree
// it moves over the tree to find the location
// to insert a node with a given data
insertNode(node, newNode)
{
  // if the data is less than the node
  // data move left of the tree
  if (newNode.data < node.data) {
    // if left is null insert node here
    if (node.left === null)
      node.left = newNode;
    else

      // if left is not null recur until
      // null is found
      this.insertNode(node.left, newNode);
  }

  // if the data is more than the node
  // data move right of the tree
  else {
    // if right is null insert node here
    if (node.right === null)
      node.right = newNode;
    else

      // if right is not null recur until
      // null is found
      this.insertNode(node.right, newNode);
  }
}
