class DenseGraph{
  constructor(n,directed= false){
    // 节点数
    this.n = n
    // 边数
    this.m = 0
    // 有向图还是无向图
    this.directed = directed
    for(let i =0;i< n; i++){
      
      function createArr(n){
        let arr = new Array(n)
        arr.forEach(item => {
          item = false
        })
      }
      this.g.push(createArr(n))
    }
  }
  getV(){
    return this.n
  }
  getE(){
    return this.m
  }
  addEdge(v,w){
    if(this.hasEdge(v,w)) return 
    this.g[v][w] = true
    if(!this.directed){
      g[w][v] = true
    }
    this.m++
  }
  hasEdge(v,w){
    return this.g[v][w]
  }
}