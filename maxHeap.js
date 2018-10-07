// 最大堆
class MaxHeap{
    constructor(arr){
        this.data = []
        this.count = 0
        if(typeof arr !== 'undefined'){
            for(let i = 0; i< arr.length ; i++){
                this.data[i+1] = arr[i]
            }
            this.count = arr.length
           for(let k = this.count/2;i>-1;i--){
               this.shitDown(i)
           }     
        }
        
    }
    size(){
        return this.count
    }
    isEmpty(){
        return this.count ===0
    }
    insert(item){
        this.data[this.count+1] = item
        this.count ++
        this.shifUp(this.count)
    }
    // 取出最大值
    extractMax(){
        let ret = this.data[1]
        [this.data[1],this.data[this.count]] = [this.data[this.count],this.data[1]]
        this.count--
         this.shitDown(1)   
        return ret
    }
    shifUp(k){
        while(this.data[k/2] <this.data[k]){
            [this.data[k/2],this.data[k]] = [this.data[k],this.data[k/2]]
            // k/=2
        }
    }
    shitDown(k){
        while(2*k <=this.count){
            let j = 2*k
            if(j+1<this.count && this.data[j+1]>this.data[j]){
                j+=1
            }
            if(this.data[k]>= this.data[j]){
                break
            }
            [this.data[k],this.data[j]] = [this.data[j],this.data[k]]
            k = j 
        }

    }

}

let maxheap = new MaxHeap()
maxheap.insert(4)
maxheap.insert(8)
maxheap.insert(2)
maxheap.extractMax()
console.log(maxheap.count)
console.log(maxheap.data)
module.exports = MaxHeap