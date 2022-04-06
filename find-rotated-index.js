function findRotatedIndex(arr, no, low = 0, high = arr.length - 1) {
  const pivot = findPivot(arr);
  if (arr[0] < no) {
    return binarySearch(arr, no, 0, pivot - 1);
  } else {
    return binarySearch(arr, no, pivot, arr.length - 1);
  }
}

function binarySearch(arr, no, low, high) {
  if (low > high) return -1;
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === no) {
    return mid;
  } else if (arr[mid] < no) {
    return binarySearch(arr, no, mid + 1, high);
  } else {
    return binarySearch(arr, no, low, mid - 1);
  }
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

module.exports = findRotatedIndex;
