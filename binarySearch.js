//  二分查找法 只能针对有有序数组
// 如果找到target 返回相应的索引 index 
// 如果没有找到target 返回-1
function binarySearch(arr,target){
  let l= 0
  let r = arr.length -1
  while(l<=r){
    // [l, r]
    let mid = l+parseInt((r-l)/2)
    if(arr[mid] == target){
      return mid
    } 
    if(target<arr[mid]){
      r = mid-1
    }else{
      l = mid +1
    }
  }
  return -1
}
module.exports = binarySearch