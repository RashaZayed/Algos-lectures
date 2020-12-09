class Node{
    constructor (value , next){
        this.value=value;
        this.next = next;
    }
}
class SLL {
    constructor(){
        this.head = null;
        this.size=0;
    }
    insertFront(value){
        this.head = new Node (value , this.head);
        this.size++;
    }
    contains (value){
        if(!this.head){
            return null;
        }else {
            let current = this.head;
            while(current){
                if(current.value ==value){
                   
                    return true;
                }
                current = current.next;
                
                }
                return false
            }
        }
    
}
let linkedList = new SLL();
linkedList.insertFront(5);
linkedList.insertFront(7);
linkedList.insertFront(79);
console.log(linkedList)
let valueInList = linkedList.contains(7);
console.log(valueInList)
