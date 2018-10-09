let MaxHeap = require('./maxHeap')

function heapSort1 (arr){
    console.time('heapSort1')
    let maxHeap = new MaxHeap()
    let n = arr.length 
    for(let i = 0; i< arr.length ;i++){
        maxHeap.insert(arr[i])
    }
    // console.log(max1 Heap.data)
    for(let j = n;j>=1;j--){
        arr[j] = maxHeap.extractMax()
       
    }
    console.timeEnd('heapSort1')
}
function heapSort2(arr){
    console.time('heapSort2')
    let maxHeap = new MaxHeap(arr)
    let n = arr.length
    for(let j = n-1;j>=0;j--){
        arr[j] = maxHeap.extractMax()
    }
    console.timeEnd('heapSort2')
}
module.exports = {heapSort2,heapSort1}