class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }
  printList() {
    var currentNode = this.head;
    while (currentNode) {
      console.log(`current node value is ${currentNode.value}`);
      currentNode = currentNode.next;
    }
  }

  insertLast(value) {
    let node = new Node(value);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

const ll = new SLL();

ll.insertFirst(300);
ll.insertFirst(200);
ll.insertLast(20);

console.log(ll);

const twoSum = (nums, target)=> {
  let index=[];
  for (let i=0; i<nums.length-1  ;i++){
      
      for(let j=i+1;  j<nums.length    ;j++){
          if(nums[i]+nums[j]==target){
               index.push(i);
               index.push(j)
               return index
          }
      }
  }
  return ("No two sum Solution")
  
};
console.log(twoSum([1,3,3,4,6,6,9], 8))