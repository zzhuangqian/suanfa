// 对于一组数据 主要支持两个动作 union(p,q) find(p)     回答 isConnected(p,q)
class UnionFind{
  constructor(count){
    this.count = count
    this.id = []
    for(let i=0; i< count; i++){
        this.id[i] = i
    }
  }
  find(p){
    // if(p>=0 && p< this.count) throw new Error('不为真')
    return this.id[p]
  }
  unionElements(p,q){
      let pID = this.find(p)
      let qID = this.find(q)
      if(pID === qID){
        return 
      }
      for(let i =0; i< this.count;i++){
        if(this.id[i] == pID){
          this.id[i] = qID
        }
      }
  }
  isConnected(p,q){
    return this.find(p) === this.find(q)
  }
}
 
module.exports = UnionFind