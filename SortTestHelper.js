function generateRandomArray (count,rangL,rangR){
    if(rangL>rangR) return []
    let arr = []
    for(let i = 0; i< count;i++){
        arr[i] = parseInt(Math.random()*(rangR -rangL+1)) +rangL
    }
    // console.log('prinary　arr ' + arr)
    return arr
}
function generateNearlyOrderArray(count,swapTimes){
    let arr = []
    for(let i = 0; i<count;i++){
        arr[i] = i
    }
    for(let j = 0; j<swapTimes;j++){
        let posx = parseInt(Math.random() * count)
        let posy = parseFloat(Math.random() * count)
    
        // [arr[posx],arr[posy]] = [arr[posy],arr[posx]]
    }
    return arr 
}
function isSorted(arr){
    for(let i = 0;i< arr.length ;i++){
        if(arr[i] > arr[i+1]){
            // throw Error('排序不成功')
            return false
        }
    }
    return true
}
function deepCopy(arr){
    return JSON.parse(JSON.stringify(arr))
}
module.exports = {
    generateRandomArray,
    generateNearlyOrderArray,
    isSorted,
    deepCopy
}