// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class SLL {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFront(value) {
    this.head = new Node(value, this.head);
  }
  insertLast(value) {
    let node = new Node(value, null);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  display(){
      let str = "";
      let runner= this.head;
      while(runner){
          str += ` ${runner.value} `
          runner = runner.next;
      }
      return str;
  }
}
let ll = new SLL();
ll.insertFront(5);

ll.insertLast(8);
ll.insertLast("Rasha")
ll.insertLast(true)
console.log(ll.display());
