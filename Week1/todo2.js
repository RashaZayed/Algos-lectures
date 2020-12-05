const reverseArr = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};
console.log(reverseArr([10, 20, 30, 40, 50]));

// 2-Rotate
const rotateArr = (arr, shift) => {
  let shiftabs = Math.abs(shift);
  while (shiftabs > 0) {
    if (shift > 0) {
      let temp = arr[arr.length - 1];
      for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
      }
      arr[0] = temp;
    } else if (shift < 0) {
      let temp2 = arr[0];
      for (let j = 0; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr[arr.length - 1] = temp2;
    }

    shiftabs--;
  }
  return arr;
};
console.log(rotateArr([1, 2, 3, 4, 5, 6], 2));

// 3-filter range
function filterRange(arr, min, max) {
  let current = 0;
  let store = 0;

  while (current < arr.length) {
    if (arr[current] > min && arr[current] < max) {
      arr[store] = arr[current];
      store++;
    }

    current++;
  }

  arr.length = store;
}

a = [1, 2, 3, 4];
console.log(filterRange(a, 2, 4));

//4-concat
const concatArr = (arr1, arr2) => {
  var newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr[i] = arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    newArr[arr1.length + j] = arr2[j];
  }
  return newArr;
};
console.log(concatArr([1, 2, 3, 4], [5, 6, 7, 8, 9]));
