function treeIntersection(binaryTree1, binaryTree2) {

  const matchedItems = [];
  const map = new Map();
  const tree1 = binaryTree1.inOrder();
  const tree2 = binaryTree2.inOrder();
  for (const item of tree1) {
    map.set(item);
  }


  for (const item of tree2) {
    if (map.has(item)) {
      matchedItems.push(item);
    }
  }
  return matchedItems;
}

module.exports = treeIntersection;
