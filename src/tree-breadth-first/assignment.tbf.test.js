const { BinaryTree } = require('./binary_tree.js');
const { Node, breadthFirst } = require('./tree-breadth-first.js');


describe('Binary Tree', () => {
  const tree = new BinaryTree(
    new Node(
      1,
      new Node(2, new Node(4), new Node(5)),
      new Node(3, undefined, new Node(6))
    )
  );

  //          1
  //        /   \
  //       2     3
  //      / \     \
  //     4   5     6

  it('does an in-order traversal (left, root, right)', () => {
    expect(breadthFirst(tree)).toEqual([1, 2, 3, 4, 5, 6]);

  });
});
