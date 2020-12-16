// Create a standalone function that locates the minimum value in a linked list,
// and moves that node to the front of the list.
//Return the new list, with all nodes still present, and all (except for the new head node) in their original order.

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
  moveMinFront() {
    let min = this.head;

    let runner = this.head;
    let bmin = this.head;
    if (!this.head) {
      return "This list is empty";
    } else {
      while (runner) {
        if (min.value > runner.value) {
          min = runner;
        }

        runner = runner.next;
      }
      while (bmin.next != min) {
        bmin = bmin.next;
      }
      bmin.next = bmin.next.next;
    }
    min.next = this.head;
    this.head = min;
  }
}

let singleList = new SLL();
singleList.insertFront(4);
singleList.insertFront(2);
singleList.insertFront(10);
console.log(singleList.moveMinFront());

console.log(singleList);
