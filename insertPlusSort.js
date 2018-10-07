// 插入排序改进版
function insertionSort(arr) {
    console.time('insertPlus')
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j 
        // 寻找元素arr[i] 合适的插入位置
        for ( j = i; j > 0 &&arr[j-1]>temp; j--) {
           arr[j] = arr[j-1]
        }
        arr[j] = temp
    }
    console.timeEnd('insertPlus')
}
module.exports = insertionSort