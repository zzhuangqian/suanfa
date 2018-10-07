function mergeSortPlus (arr){
    for(let sz = 1;sz<= n ; sz+=sz){
        for(let i = 0; i+sz< n; i+=sz+sz){
            _merge(arr,i,i+sz-1,Math.min(i+sz+sz-1,n-1))
        }
    }
}
module.exprots = mergeSortPlus