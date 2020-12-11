// Create a method that returns the last value in the list.
//Create a method that removes the last ListNode in the list and returns the new list.
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
  insertLast(value) {
    let node = new Node(value, null);
    if (!this.head) {
      this.head = new Node(value, this.head);
    } else {
      let runner = this.head;
      while (runner.next) {
        runner = runner.next;
      }
      runner.next = node;
    }
  }
  getLast() {
    if (!this.head) {
      return "list is empty";
    } else {
      let runner = this.head;
      while (runner.next) {
        runner = runner.next;
      }
      return runner.value;
    }
  }
  // Create a method that removes the last ListNode in the list and returns the new list.
  removeBack() {
    let runner = this.head;
    if (!runner) {
      return "this list is empty";
    } else {
      while (runner.next.next) {
        runner = runner.next;
      }
      runner.next = null;
    }
  }
  //Create a method that creates a Node with given value and inserts it at end of your linked list.
  addBack(value) {
    if (!this.head) {
      this.head = new Node(value, this.head);
    } else {
      let node = new Node(value, null);
      let runner = this.head;
      while (runner.next) {
        runner = runner.next;
      }
      runner.next = node;
    }
  }
}
let ll = new SLL();

ll.insertLast(60);
ll.insertLast(40);
ll.addBack(10);

console.log(ll);
