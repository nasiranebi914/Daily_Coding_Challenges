function rotateMatrix(arr) {
  let newArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      newArr.push(arr[j][i]);
      if (j == 0) {
        result.push(newArr);
        newArr = [];
      }
    }
  }
  console.log(result);
}

rotateMatrix([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]);
rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
