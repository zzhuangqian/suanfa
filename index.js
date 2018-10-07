let {generateRandomArray,isSorted,deepCopy,generateNearlyOrderArray} = require('./SortTestHelper')
let selectionSort = require('./SelectionSort')
let insertionSort = require('./InsertSort')
let insertionPlusSort = require('./insertPlusSort')
let arr = generateNearlyOrderArray(1000, 100, 140)
let arr2 = deepCopy(arr)
let arr3 = deepCopy(arr)
console.log(isSorted(arr))

// 选择排序 
selectionSort(arr2)
// 插入排序
insertionSort(arr)
// 插入排序改进版 
insertionPlusSort(arr3)
console.log(isSorted(arr))


