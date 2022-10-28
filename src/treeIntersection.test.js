const { BinaryTree, Node } = require('./binary_tree');
const treeIntersection = require('./treInstersection');

describe('Tree Intersection', () => {


  it('performs tree intersection with only one node in each tree', () => {
    const tree1 = new BinaryTree(new Node(1));
    const tree2 = new BinaryTree(new Node(2));
    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });

  it('performs tree intersection with more than one node in each tree', () => {
    const tree1 = new BinaryTree(new Node(15, new Node(100, new Node(7), new Node(12, new Node(11), new Node(19))), new Node(2, new Node(101), new Node(3, new Node(30), new Node(5)))));
    const tree2 = new BinaryTree(new Node(4, new Node(10, new Node(15), new Node(19, new Node(13), new Node(17))), new Node(6, new Node(21), new Node(3, new Node(9), new Node(50)))));

    expect(treeIntersection(tree1, tree2)).toEqual([15, 19, 3]);
  });

  it('performs tree intersection with more than one node each tree that has no matches', () => {
    const tree1 = new BinaryTree(new Node(1, new Node(2, undefined), new Node(3, new Node(4), new Node(5, new Node(6), new Node(7)))));
    const tree2 = new BinaryTree(new Node(8, new Node(9, new Node(10)), new Node(11, new Node(12))));

    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });
});
