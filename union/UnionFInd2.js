class UnionFind2{
  constructor(count){
    this.parent = {}
    this.count = count
    for(let i = 0; i< this.count; i++){
      this.parent[i] = i
    }
  }
  find(p){
    while(p !=this.parent[p]){
      p = this.parent[p]
    }
    return p 

  }
  isConnected(p,q){
    return this.find(p) === this.find(q)
  }
  unionElements (p ,q){
    let pRoot = this.find(p)
    let qRoot = this.find(q)
    if(pRoot == qRoot){
      return 
    }
    this.parent[pRoot] = qRoot
  }
}
module.exports = UnionFind2