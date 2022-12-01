function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (arr[leftIdx] === 0 && arr[rightIdx] === 0) {
      return arr.length;
    }
    if (arr[leftIdx] === 1 && arr[rightIdx] === 1) {
      return 0;
    }
    if (arr[leftIdx] === 1 && middleVal === 0) {
      return arr.length - 1 - leftIdx;
    }

    if (middleVal === 0) {
      rightIdx = middleIdx - 1;
    } else if (middleVal === 1) {
      leftIdx = middleIdx + 1;
    }
  }
}

module.exports = countZeroes;
