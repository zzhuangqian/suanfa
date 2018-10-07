// 归并排序
function mergeSort (arr){
   let length = arr.length
   // 递归使用归并排序，对arr[l...r]的范围进行排序
   _mergeSort(arr,0,length-1) 
}

function _mergeSort(arr,left,right){
if(left>=right) return
let mid = parseInt((left+right)/2)
// console.log('mid'+mid)
_mergeSort(arr,left,mid)
_mergeSort(arr,mid+1,right)
if(arr[mid] > arr[mid+1]){
    _merge(arr,left,mid,right)
}
// console.log(arr)
}
function _merge(arr,left,mid,right){
    let aux = []
    for(let j = left;j<=right;j++){
        aux[j-left] = arr[j]
    }
    let i = left
    let  j = mid+1
    for(let k = left;k<=right;k++){
        //.log(left)
        if(i> mid){
            arr[k] = aux[j-left]
            j++
        }else if(j>right){
            arr[k] = aux[i-left]
            i++
        }else if( aux[i-left]< aux[j-left]){
            arr[k] = aux[i-left];
            i++
        }else{
            arr[k] = aux[j-left]
            j++
        }
    }
}
module.exports = mergeSort