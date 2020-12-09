class Node {
    constructor(value ,next=null){
        this.value = value;
        this.next = next;
    }
}

class SLL {
    constructor(){
        this.head = null;
        this.size =0;
    }
    insertFront(value){
        this.head = new Node(value , this.head);
        this.size++;

    }

    removeFront(){
    if(this.head){
    this.head = this.head.next;
    this.size--;
    }else{
        return null;
    }
}

 returnFrontValue(){
     if(this.head){
       
         return this.head.value
     }

 }
}
let linkedList = new SLL();
linkedList.insertFront(5);
linkedList.insertFront(50);
linkedList.insertFront(500);
linkedList.removeFront();
let firstValue =  linkedList.returnFrontValue();
console.log('first value is:' + firstValue)

console.log(linkedList)