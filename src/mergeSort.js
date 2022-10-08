

function merge(left, right) {
  // console.log('------------merge called----------------');
  // console.log('\n');
  let arr = [];
  // console.log('arr: ', arr);


  while (left.length && right.length) {
    // console.log(`left[${left[0]}] < right[${right[0]}] ?`);
    if (left[0] < right[0]) {
      // console.log('left[0]: ', left[0]);
      // console.log('arr.push(LEFT.SHIFT): ', left.shift());
      arr.push(left.shift());

      // console.log('arr: ', arr);
    } else {
      // console.log('right[0]: ', right[0]);
      // console.log('arr.push(RIGHT.SHIFT): ', right.shift());
      // console.log('\n');
      arr.push(right.shift());

      // console.log('arr: ', arr);
    }
  }

  // console.log('spread arrays: ', [...arr, ...left, ...right]);
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  // console.log('-----------mergeSort called-----------');
  // console.log('\n');
  if (array.length === 0) {
    throw new Error('Input array is empty!');
  }
  const half = array.length / 2;
  // console.log('half: ', half);
  // console.log('\n');

  // return once we get to 1 element
  if (array.length < 2) {
    // console.log('array: ', array);
    return array;
  }

  // get left half of the array
  const left = array.splice(0, half);
  // console.log('left: ', left);
  // console.log('arr: ', array);
  // console.log('\n');
  return merge(mergeSort(left), mergeSort(array));
}


module.exports = mergeSort;
