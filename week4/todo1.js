const treeify = require("treeify");
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      let current = this.root;
      while (true) {
        if (value > current.value) {
          if (!current.right) {
            current.right = new Node(value);
            return this;
          }
          current = current.right;
        } else {
          if (!current.left) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return false;
    } else {
      let current = this.root;

      while (current) {
        if (value === current.value) {
          return true;
        } else if (value > current.value) {
          current = current.right;
        } else if (value <= current.value) {
          current = current.left;
        }
      }
    }
    return false;
  }
  //Create a min() method on the BST class that returns the smallest value found in the BST.
  min(){
      if(!this.root){
        return  "tree is empty";
      }else{
          let current = this.root;
          while(current.left){
              current = current.left;
          }
          return current.value;
      }
  }
  max(){
      if(!this.root){
          return "the tree is empty"
      }else {
          let current = this.root;
          while(current.right){
              current = current.right;
          }
          return current.value;
      }
  }
  //Write a size() method that returns the number of nodes (values) contained in the tree.
  size(){
      if(!this.root){
          return 0;
      }
          function sizeHelp (current){
              if(!current){
                  return 0;
              }else{
                  return 1+ sizeHelp(current.right)+ sizeHelp(current.left);
              }
             
          }
      
      return sizeHelp(this.root);
  }
  //Create an isEmpty() method to return whether the BST is empty (whether it contains no values).
  isEmpty(){
    return  !this.root ? true : false ;
  }

}
const tree = new BST();
tree.add(20);
tree.add(5);
tree.add(7);
tree.add(0)
tree.add(25);
tree.add(22);
tree.add(90)
tree.add(1)
tree.add(25)
tree.add(12)
tree.add(13)


console.log(treeify.asTree(tree, true));
console.log(`min value in the tree is ${tree.min()} `);
console.log(`max value in the tree is ${tree.max()} `);
console.log(`the tree size is ${tree.size()}`)
console.log(tree.isEmpty());