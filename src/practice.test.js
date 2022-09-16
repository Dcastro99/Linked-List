const { BinaryTree1 } = require('./practice.js');
const { Node1 } = require('./practice.js');
// const { inOrderOneLine } = require('./practice.js');


describe('Binary Tree', () => {
  const tree = new BinaryTree1(
    new Node1('to',

      new Node1('dogs',

        new Node1('all'), new Node1('go')),

      new Node1('heaven', undefined)
    )
  );

  //           to
  //         /      \
  //       dogs    heaven
  //      /   \
  //     all   go

  it('does an in-order traversal (left, root, right)', () => {
    console.log('tree', tree.inOrderOneLine());
    expect(tree.inOrderOneLine()).toEqual(['all', 'dogs', 'go', 'to', 'heaven']);

  });
});
