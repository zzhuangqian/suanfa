class SparseGraph{
  constructor(n,directed){
    this.n = n 
    this.m = 0
    this.directed = directed
    for(let i = 0 ; i < n ; i++){
      this.g.push(new Array())
    }
  }
  getV(){
    return this.n 
  }
  getE(){
    return this.m 
  }

  addEdge(v,w){
  this.g[v].push(w)
  // 自环边
  if(v!=w&& !this.directed){
    this.g[w].push(v)
  }
  this.m ++
  }
  hasEdge(v,w){
    for(let i = 0; i< this.g[v].length ; i++){
      if(this.g[v][i] == w){
        return true
      }
    }
    return false
  }

}