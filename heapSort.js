let MaxHeap = require('./maxHeap')

function heapSort1 (arr){
    let maxHeap = new MaxHeap()
    for(let i = 0; i< arr.length ;i++){
        maxHeap.insert(arr[i])
    }
    for(let j = n-1;j>=0;j--){
        arr[j] = maxHeap.extractMax()
    }
}
module.exports = {
    heapSort1
}