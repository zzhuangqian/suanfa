//  插入排序 
function insertionSort(arr){
    console.time('insert')
    for(let i =1 ;i<arr.length;i++){
        // 寻找元素arr[i] 合适的插入位置
        for(let j = i;j>0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    console.timeEnd('insert')
}
module.exports = insertionSort