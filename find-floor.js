function findFloor(arr, no) {
  const floor = findnearest(arr, no);
  return floor;
}

function findnearest(arr, no, low = 0, high = arr.length - 1) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (
      arr[mid] === no ||
      (arr[mid - 1] < no && arr[mid + 1] > no) ||
      mid + 1 > arr.length - 1
    ) {
      return arr[mid];
    } else if (arr[mid] > no) {
      return findnearest(arr, no, low, mid - 1);
    } else if (arr[mid] < no) {
      return findnearest(arr, no, mid + 1, high);
    }
  }
  return -1;
}

module.exports = findFloor;
