function zeroMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        arr[i] = new Array(arr[i].length).fill(0);
      }
    }
  }
  console.log(arr);
}

zeroMatrix([
  [1, 2, 3, 0],
  [4, 5, 0, 5],
  [7, 8, 9, 10],
]);
