function findRotatedIndex(arr, val) {
let leftIdx = 0
let rightIdx = arr.length - 1
while(leftIdx <= rightIdx){
    let middleIdx = Math.floor((leftIdx + rightIdx)/2)
    let middleVal = arr[middleIdx]
    let moveLeft = val - arr[leftIdx]
    let moveRight = val - arr[rightIdx]
    if(middleVal === val) {
        return middleIdx
    }
    if(Math.abs(moveLeft) < Math.abs(moveRight)){
        rightIdx = middleIdx - 1
    }
    else if (Math.abs(moveRight) < Math.abs(moveLeft)) {
        leftIdx = middleIdx + 1
    }
    else {
        return -1
    }
}
 
}

module.exports = findRotatedIndex