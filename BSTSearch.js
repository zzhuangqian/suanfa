// 二分搜索树 主要查找表的实现key - values 
// 高效  不仅可查找数据 ，还可以高效地插入，删除数据-动态维护数据 可以方便地回答很多数据之间的关系问题
// 二叉树 每个节点的键值 大于左孩子 ，每个节点键值 小于右孩子，以左右孩子为根的子树仍为二分搜索树
// 不一定是完全二叉树 
// 红黑树

class BST{
  constructor(){
    this.count = 0
    this.root = Null 
  }
  insert(key,value){
   this.root = this._insert(this.root,key,value)
      
  }
  contain(key){
    this._contain(this.root,key)
  }
  search(key){
    this._search(this.root,key)
  }
  // 前序遍历
  preOrder(){
    this._preOrder(this.root)
  }
  //  中序遍历
  inOrder(){
    this._inOrder(this.root)
  }
//  后序遍历
  postOrder(){
    this._postOrder(this.root)
  }
  // 层序遍历 
  levelOrder(){
    let arr = []
    arr.push(this.root)
    while(!arr.length !==0){
      let node =arr.shift()
      console.log(node.key)
      if(node.left){
        arr.push(node.left)
      }
      if(node.right){
        arr.push(node.right)
      }
    }
  }
  minmum(){
    if(this.count !==0) throw new Error('不能为空')
    this._minmum(this.root)  
  }
  maxmum(){
    this._maxmum(this.root)
  }
  removeMin(){
    if(this.root){
      this._removeMin(this.root)
    }
  }
  removeMax(){
    if(this.root){
      this._removeMax(this.root)
    }
  }
  remove(key){
    this._remove(this.root,key)
  }
  _remove(node,key){
    if(node === null) return null
    if(key < node.key){
      node.left = this._remove(node.left,key)
      return node
    }else if(key > node.key){
      ndoe.right = this._remove(node.right,key)
      return node
    }else{
      if(node.left == null){
          let rightNode = node.right
          this.count --
          node = null
          return rightNode
      }
      if(node .right = null){
        let leftNode = node.left
        this.count --
        node = null
        return leftNode
      }
      // let delNode = node
      let successor = this._minmum(node)
      successor.right = this._removeMin(node.right)
      successor.left = node.left
      node = null
      this.count --
      return successor

    }

  }
  _removeMax(node){
    if(node.rigth === null){
      let leftNode = node.left
      node = null
      return leftNode
    }
    node.right = this._removeMax(node.right)
    return node
  }
  _removeMin(node){
    if(node.left == null){
    let rightNode = node.right
    node = null
    return rightNode
    }
    node.left = this._removeMin(node.left)
    return node
  }
  _maxmum(node){
    if(node.right === null){
      return node
    }
    return this._maxmum(node.right)
  }
  _minmum(node){
    if(node.left === null){
      return node
    }
    return this._minmum(node.left)
  }
  _postOrder(node){
    if(node !== null){
      this._postOrder(node.left)
      this._postOrder(node.right)
      console.log(node.key)
    }
  }
  _inOrder(node){
    if(node !== null){
      this._inOrder(node.left)
      console.log(node.key)
      this._inOrder(node.right)
    }
  }

  _preOrder(node){
    if(node !== null){
      console.log(node.key)
      this._preOrder(node.left)
      this._preOrder(node.right)
    }
  }
  _search(node,key){
    if(node === null){
      return NUll 
    } else if(key === node.key){
      return node.value
    }else if(key < node.key){
      return this._search(node.left,key)
    }else{
      return this._search(node.right,key)
    }
  }

  _contain(node,key){
    if(node === null){
      return false
    }
    if(key=== node.key ){
      return true
    }else if(key< node.key){
      return this._contain(node.left,key)
    }else{
      return this._contain(node.right,key)
    }
  }
  _insert(node,key,value){
    if(node== Null){
      this.count ++
      return new Node(key,value)
    }
    if(key == node.key){
      node.value = value 
    }else if(key< node.key){
      node.left = this._insert(node.left,key,value)
    }else {
      node.rigth = this._insert(node.right,key,value)
    }
    return node 
  }
}

class Node{
  constructor(key,value){
    this.key = key 
    this.value = vale 
    this.left = this.right = NUll 
  }
}