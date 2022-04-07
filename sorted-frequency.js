function sortedFrequency(arr, no) {
  const firstIndex = findFirstOccurance(arr, no);
  if (firstIndex === -1) return -1;
  const lastIndex = findLastOccurance(arr, no);
  return lastIndex - firstIndex + 1;
}

function findFirstOccurance(arr, no, low = 0, high = arr.length - 1) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === no && (mid === 0 || arr[mid - 1] !== no)) {
      return mid;
    } else if (arr[mid] >= no) {
      return findFirstOccurance(arr, no, low, mid - 1);
    }
    return findFirstOccurance(arr, no, mid + 1, high);
  }
  return -1;
}

function findLastOccurance(arr, no, low = 0, high = arr.length - 1) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === no && (mid === arr.length - 1 || arr[mid + 1] !== no)) {
      return mid;
    } else if (arr[mid] <= no) {
      return findLastOccurance(arr, no, mid + 1, high);
    } else {
      return findLastOccurance(arr, no, low, mid - 1);
    }
  }
  return -1;
}

module.exports = sortedFrequency;
