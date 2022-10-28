const { BinaryTree, Node } = require('./binary_tree.js');
const treeIntersection = require('./treInstersection');

describe('Binary Tree', () => {
  const tree = new BinaryTree(
    new Node(
      1,
      new Node(7, new Node(2), new Node(6, new Node(3), new Node(11))),
      new Node(9, undefined, new Node(9, new Node(5), new Node(15)))
    )
  );


  //          1
  //        /   \
  //       7     9
  //      / \     \
  //     2   6     9
  //        / \   /  \
  //       3  11 5    15

  it.skip('does an in-order traversal (left, root, right)', () => {
    expect(tree.inOrder()).toEqual([2, 7, 3, 6, 11, 1, 9, 5, 9, 15]);
  });

  it.skip('does an post-order traversal (left, right, root)', () => {
    expect(tree.postOrder()).toEqual([2, 3, 11, 6, 7, 5, 15, 9, 9, 1]);
  });

  it.skip('does an pre-order traversal (root, left, right)', () => {
    expect(tree.preOrder()).toEqual([1, 7, 2, 6, 3, 11, 9, 9, 5, 15]);
  });
  it.skip('does a max traversal', () => {
    expect(tree.max()).toEqual(15);
  });
  it.skip('does a traversal and checks if divisable by 3 & 5', () => {
    expect(tree.fizzBuzzTree()).toEqual(['1', '7', 'Fizz', '2', 'Fizz', 'Fizz', 'Fizz', '11', 'Buzz', 'FizzBuzz']);
  });

  // expect(() => treeIntersection(tree1, tree2)).toThrow('binary tree is empty');
  it('performs tree intersection with only one node in each tree', () => {
    const tree1 = new BinaryTree(new Node(100));
    const tree2 = new BinaryTree(new Node(150));
    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });
  it('performs tree intersection with more than one node in each tree', () => {
    const tree1 = new BinaryTree(new Node(150, new Node(100, new Node(75), new Node(160, new Node(125), new Node(175))), new Node(250, new Node(200), new Node(350, new Node(300), new Node(500)))));
    const tree2 = new BinaryTree(new Node(42, new Node(100, new Node(15), new Node(160, new Node(125), new Node(175))), new Node(600, new Node(200), new Node(350, new Node(4), new Node(500)))));

    expect(treeIntersection(tree1, tree2)).toEqual([100, 125, 160, 175, 200, 350, 500]);
  });


});
