// 快速排序
function quickSort(arr) {
    _quickSort(arr, 0, arr.length - 1)
}
function _quickSort(arr, l, r) {
    let p = _partition(arr, l, r)
    _quickSort(arr, l, p - 1)
    _quickSort(arr, p + 1, r)

}
// 返回P 使得arr[l..p-1]<arr[p] arr[p+1]>arr[p]
function _partition(arr, l, r) {
    let j = l
    let v = arr[l]
    for (let i = l + 1; i <= r; i++) {
        if (arr[i] < v) {
            [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]]
            j++
        }
    }
    [arr[l], arr[j]] = [arr[j], arr[l]]
    return j
}
module.exports = quickSort