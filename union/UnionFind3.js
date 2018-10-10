class UnionFind3{
  constructor(count){
    this.parent = {}
    this.sz = []
    this.count = count
    for(let i = 0; i< this.count; i++){
      this.parent[i] = i
      this.sz[i] = 1
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
    // console.log(this.sz[pRoot])
    // console.log(this.parent)
    if(this.sz[pRoot] < this.sz[qRoot]){
      this.parent[pRoot] = qRoot
      this.sz[qRoot] += this.sz[pRoot]
    }else{
      this.parent[qRoot] = pRoot
      this.sz[pRoot]+= this.sz[qRoot]
    }
    // this.parent[pRoot] = qRoot
  }
}
module.exports = UnionFind3