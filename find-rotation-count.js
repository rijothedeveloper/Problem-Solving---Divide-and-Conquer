function findRotationCount(arr, no, low = 0, high = arr.length - 1) {
  const pivot = findPivot(arr);
  return pivot;
}

function findPivot(arr) {
  if (arr.length === 0 || arr[0] <= arr[arr.length - 1]) return 0;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] < arr[mid - 1]) {
      return mid;
    } else if (arr[mid] < arr[0]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

module.exports = findRotationCount;
