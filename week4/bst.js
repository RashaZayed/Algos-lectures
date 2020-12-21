const treeify = require("treeify")

class Node {
    constructor(value){
        this.value=value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor(){
        this.root = null;
    }
    insert(value){
        if(!this.root){
            this.root = new Node(value);
            
        }else{
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(!current.left){
                        current.left = new Node(value);
                        return this;
                    }
                    current = current.left;
                }else if(value > current.value){
                    if(!current.right){
                        current.right = new Node(value);
                        return this;
                    } 
                    current = current.right;
                }
            }



        }
    }
}




const tree = new BST();
tree.insert(20);
tree.insert(10)
tree.insert(15)
tree.insert(4)
tree.insert(30)
tree.insert(40)
tree.insert(25)

console.log(treeify.asTree(tree, true))