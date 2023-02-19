// 5 kyu
//  Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let zeroIndexes = [];
  for (let index in arr) {
    if (arr[index] === 0) zeroIndexes.push(index);
  }
  const zeroIndexesReversed = zeroIndexes.reverse();
  for (let index of zeroIndexesReversed) {
    arr.splice(index, 1);
  }

  zeroIndexes.forEach(() => arr.push(0));
  return arr;
}

// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
console.log(
  moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])
);
