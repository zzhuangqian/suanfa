const UnionFind = require('./Union')
const UnionFind2 = require('./UnionFInd2')
const UnionFind3 = require('./UnionFind3')
const UnionFind4 = require('./UnionFind4')
const UnionFind5 = require('./UnionFind5')
function testUF1(n){
  let uf = new UnionFind(n)
  console.time('union1')
  for(let i = 0 ; i< n ; i++ ){
    let a = parseInt(Math.random()*n)
    let b = parseInt(Math.random()*n)
    uf.unionElements(a,b)
  }
  for(let i=0;i< n; i++){
    let  a= parseInt(Math.random() *n)
    let  b= parseInt(Math.random() *n)
    uf.isConnected(a,b)
  }
  console.timeEnd('union1')
}
function testUF2(n){

  let uf = new UnionFind2(n)
  console.time('union2')
  for(let i = 0 ; i< n ; i++ ){
    let a = parseInt(Math.random()*n)
    let b = parseInt(Math.random()*n)
    uf.unionElements(a,b)
  }
  for(let i=0;i< n; i++){
    let  a= parseInt(Math.random() *n)
    let  b= parseInt(Math.random() *n)
    uf.isConnected(a,b)
  }
  console.timeEnd('union2')
}
function testUF3(n){
  let uf = new UnionFind3(n)
  console.time('union3')
  for(let i = 0 ; i< n ; i++ ){
    let a = parseInt(Math.random()*n)
    let b = parseInt(Math.random()*n)
    uf.unionElements(a,b)
  }
  for(let i=0;i< n; i++){
    let  a= parseInt(Math.random()*n)
    let  b= parseInt(Math.random()*n)
    uf.isConnected(a,b)
  }
  console.timeEnd('union3')
}
module.exports = { testUF1 ,testUF2,testUF3,UnionFind4,UnionFind5}