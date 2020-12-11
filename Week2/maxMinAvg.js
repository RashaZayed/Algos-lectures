// Create method max() to return list’s largest val.

class Node{
    constructor(value , next){
        this.value= value;
        this.next = next ;
    }
}
class SLL {
    constructor(){
        this.head = null;
    }
    insertFront(value){
        this.head = new Node(value , this.head);
    }
    maxMinAvg(){
        let runner = this.head;
        let max = this.head.value ;
        let min = this.head.value;
        let sum =0;
        let size=0;
        while(runner){
            sum +=runner.value;
            size++ ;
            if(max < runner.value){
                max = runner.value;
                
            }else if(min > runner.value){
                min = runner.value;
            }
            runner = runner.next;
        }
        return (console.log(`max value: ${max} , min value: ${ min} , Avg value:${ sum/size}`))
    }

    min(){

    }
}
let ll = new SLL();
ll.insertFront(10)
ll.insertFront(8)
ll.insertFront(7)
ll.insertFront(0)
ll.maxMinAvg()


