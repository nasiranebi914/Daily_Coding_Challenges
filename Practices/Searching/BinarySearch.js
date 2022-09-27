function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === elem) {
      return mid;
    } else if (arr[mid] < elem) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([16, 18, 24, 28, 29], 29));
