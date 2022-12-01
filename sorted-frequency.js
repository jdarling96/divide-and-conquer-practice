function sortedFrequency(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal === val) {
      if (arr[rightIdx] === val && arr[leftIdx] === val) {
        return rightIdx - leftIdx + 1;
      }

      if (arr[leftIdx] !== val) {
        leftIdx += 1;
      }
      if (arr[rightIdx] !== val) {
        rightIdx -= 1;
      }
    }

    if (middleVal > val) {
      rightIdx = middleIdx - 1;
    }
    if (middleVal < val) {
      leftIdx = middleIdx + 1;
    }
  }

  return -1;
}

module.exports = sortedFrequency;
