class Tree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  addChild(tree) {
    this.children.push(tree);
  }

  preOrder() {
    return [
      this.value,
      ...this.children.map((child) => child.preOrder()).flat()
    ];
  }
}

function fizzBuzz(tree) {

  if (!tree) {
    return undefined;
  }

  const newTree = new Tree(tree.value, tree.children);

  if (newTree.value % 3 === 0 && newTree.value % 5 === 0) {
    newTree.value = 'fizzbuzz';
  }
  if (newTree.value % 5 === 0 && newTree.value % 3 !== 0) {
    newTree.value = 'buzz';
  }
  if (newTree.value % 3 === 0 && newTree.value % 5 !== 0) {
    newTree.value = 'fizz';
  }

  newTree.children = tree.children.map(fizzBuzz);

  return newTree;
}

function oddNumSum(tree) {

  const newTree = new Tree(tree.value, tree.children);
  console.log('tree', tree);
  if (tree === null)
    return 0;
  const value = newTree.value % 2 === 0 ? 0 : newTree.value;

  return oddNumSum(newTree.left) + oddNumSum(newTree.right) + value;
}

module.exports = {
  Tree,
  fizzBuzz,
  oddNumSum
};
