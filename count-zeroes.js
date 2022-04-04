function countZeroes(arr) {
  const firstZeroPos = findFirstZero(arr);
  if (firstZeroPos === -1) return 0;
  return arr.length - firstZeroPos;
}

function findFirstZero(arr, low = 0, high = arr.length - 1) {
  let mid = low + Math.floor((high - low) / 2);
  if ((mid === 0 && high === 0) || (arr[mid] === 0 && arr[mid - 1] === 1)) {
    return mid;
  } else if (arr[mid] !== 0 && mid < arr.length - 1) {
    return findFirstZero(arr, mid + 1, high);
  } else if (arr[mid] === 0 && arr[mid - 1] === 0) {
    return findFirstZero(arr, low, mid - 1);
  }
  return -1;
}

module.exports = countZeroes;
