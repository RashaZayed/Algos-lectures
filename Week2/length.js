// Create a new SLL method length() that returns number of nodes in that list.

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class SLL {
  constructor() {
    this.head = null;
  }
  insertFront(value) {
    this.head = new Node(value, this.head);
  }
  length() {
    let size = 0;
    if (!this.head) {
      return size;
    } else {
      let runner = this.head;
      while (runner) {
        size++;
        runner = runner.next;
        console.log(runner);
      }
    }
    return size;
  }
}
let linkedList = new SLL();
linkedList.insertFront(5);
linkedList.insertFront(10);
linkedList.insertFront(15);
console.log(linkedList.length());
