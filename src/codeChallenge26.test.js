const insertionSort = require('./codeChallenge26');


describe('insertion sort ', () => {

  it('sorts a sorted array minus one', () => {
    const array = [1, 2, 4, 5, 6, 3];

    expect(insertionSort(array)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    console.log('UHHH>>>', array);
  });

  it('sorts array with large number difference', () => {
    const array = [20, 8, 16, 100, 2, 54];

    expect(insertionSort(array)).toStrictEqual([2, 8, 16, 20, 54, 100]);
    console.log('UHHH>>>', array);
  });

  it('sorts an array with negative and positive values', () => {
    const arr = [-3, 2, -11, 5, 18, 9];
    expect(insertionSort(arr)).toEqual([-11, -3, 2, 5, 9, 18]);
  });

});

