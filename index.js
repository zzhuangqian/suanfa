let {generateRandomArray,isSorted,deepCopy,generateNearlyOrderArray} = require('./SortTestHelper')
let selectionSort = require('./SelectionSort')
let insertionSort = require('./InsertSort')
let insertionPlusSort = require('./insertPlusSort')
let mergeSort = require('./mergeSort')
let {heapSort1,heapSort2} = require('./heapSort')
let arr = generateRandomArray(1000, 100, 140)
let arr2 = deepCopy(arr)
let arr3 = deepCopy(arr)
let arr4 = deepCopy(arr)

let arr5 = deepCopy(arr)
// 选择排序 
selectionSort(arr2)
// 插入排序
insertionSort(arr)
// 插入排序改进版 
insertionPlusSort(arr3)
//  归并排序
mergeSort(arr4)
// 二叉堆堆排序
heapSort1(arr5)
// console.log(isSorted(arr5))


