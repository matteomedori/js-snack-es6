"use strict";

function cutArray(arr, a, b) {
  return arr.filter((elem, index) => {
    if (index >= a && index <= b) {
      return elem;
    }
  });
}
const array = [0, 2, 5, 6, 4, 5];
console.log(cutArray(array, 2, 5));
