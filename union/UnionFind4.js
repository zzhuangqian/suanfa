class UnionFind4{
  constructor(count){
    this.parent = {}
    this.rank= []
    this.count = count
    for(let i = 0; i< this.count; i++){
      this.parent[i] = i
      this.rank[i] = 1
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
    if(this.rank[pRoot] < this.rank[qRoot]){
      this.parent[pRoot] = qRoot
      // this.sz[qRoot] += this.rank[pRoot]
    }else if(this.rank[pRoot]> this.rank[qRoot]){
      this.parent[qRoot] = pRoot
      // this.sz[pRoot]+= this.sz[qRoot]
    }else{
      this.parent[pRoot] = qRoot
      rank[qRoot] +=1
    }
    // this.parent[pRoot] = qRoot
  }
}
module.exports = UnionFind4