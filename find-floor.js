function findFloor(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal < val && arr[rightIdx] > val) {
      return middleVal;
    }
    if (middleIdx === leftIdx && middleIdx === rightIdx) {
      if (middleVal <= val) {
        return middleVal;
      } else {
        return -1;
      }
    }
    if (middleVal < val) {
      leftIdx = middleIdx + 1;
    }

    if (middleVal > val) {
      rightIdx = middleIdx - 1;
    }
  }
}

module.exports = findFloor;
