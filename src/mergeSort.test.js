const mergeSort = require('./mergeSort');

describe('insertion sort ', () => {

  it('merge and sorts array =>', () => {
    const array = [8, 4, 23, 42, 16, 15];
    let str = mergeSort(array);
    expect(str).toStrictEqual([4, 8, 15, 16, 23, 42]);
    console.log('merge and sorts Array =>', str);
  });

  it('sorts array revered-sorted', () => {
    const array = [20, 18, 12, 8, 5, -2];

    let str = mergeSort(array);
    expect(str).toStrictEqual([-2, 5, 8, 12, 18, 20]);
    console.log('revered-sorted Array =>', str);
  });

  it('sorts an array with few uniques', () => {
    const arr = [5, 12, 7, 5, 5, 7];

    let str = mergeSort(arr);
    expect(str).toEqual([5, 5, 5, 7, 7, 12]);
    console.log('Few uniques =>', str);
  });

  it('sorts nearly-sorted array', () => {
    const arr = [2, 3, 5, 7, 13, 11];

    let str = mergeSort(arr);
    expect(str).toEqual([2, 3, 5, 7, 11, 13]);
    console.log('nearly-sorted =>', str);
  });

});
