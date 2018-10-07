let {generateRandomArray,isSorted,deepCopy,generateNearlyOrderArray} = require('./SortTestHelper')
let selectionSort = require('./SelectionSort')
let insertionSort = require('./InsertSort')
let insertionPlusSort = require('./insertPlusSort')
let arr = generateNearlyOrderArray(1000, 100, 140)
let arr2 = deepCopy(arr)
let arr3 = deepCopy(arr)
console.log(isSorted(arr))

selectionSort(arr2)
insertionSort(arr)
insertionPlusSort(arr3)
console.log(isSorted(arr))


