//1-Reverse Integer
const reverseInt = (num) => {
  let reverse = 0;
  let negative;
  if (num < 0) {
    negative = true;
    num = num * -1;
  }
  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (reverse > 2 ** 31 - 1) {
    return 0;
  }
  return negative ? reverse * -1 : reverse;
};
// console.log(reverseInt(-467))

//2-Palindrome Number( 121, 323 , 1010)
const isPalindrome = (num) => {
  let reverse = 0;
  let temp = num;
  if (num < 0) {
    return false;
  }
  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return temp == reverse ? true : false;
};
// console.log(isPalindrome(10));

//3- romanToInt
const romanInt = (str) => {
  let romanInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    let currentInt = romanInt[str.charAt(i)];
    let nextInt = romanInt[str.charAt(i + 1)];
    if (nextInt) {
      if (currentInt >= nextInt) {
        total += currentInt;
      } else {
        total += nextInt - currentInt;
        i++;
      }
    } else {
      total += currentInt;
    }
  }
  return total;
};

// console.log(romanInt("III"));
//4-Longest Common Prefix
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return "";
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};
// console.log(longestCommonPrefix(["flower", "flow", "flag"]))

//5-parenthis validations
const isValid = (str) => {
  let stack = [];
  let hash = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let bracket of str) {
    if (hash[bracket]) {
      stack.push(bracket);
    } else {
      let char = stack.pop();
      if (hash[char] !== bracket) {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
};

// console.log(isValid("({()})"))
//6-merge 2 sorted linked list
// class ListNode{
//     constructor(value , next){
//         this.value = value;
//         this.next = next ;
//     }
// }
// class SLL{
//     constructor(){
//         this.head = null;
//     }
//       insertFront(value){
//         this.head = new ListNode (value , this.head);

//     }

// }

// const mergeLinkedList = (l1 , l2)=> {

//     let dummy = new ListNode();
//     let head = dummy;

//     while(l1 && l2){
//         if(l1.value <= l2.value){
//             dummy.next = l1;
//             l1 = l1.next ;
//         }else {
//             dummy.next = l2;
//             l2 = l2.next;
//         }
//         dummy=dummy.next;
//     }
//     if(l1 !==null){
//         dummy.next = l1;

//     }else {
//         dummy.next = l2;
//     }

//     return head.next ;
// }
// let  l1 = new SLL();
// let  l2 = new SLL();
// l1.insertFront(4)
// l1.insertFront(3)
// l1.insertFront(1)

// l1.insertFront(2)
// l1.insertFront(1)
// console.log(mergeLinkedList(l1, l2))

//7-Remove Duplicates from Sorted Array
const removeDuplicates = (arr) => {
  let store = 0;
  let current = 0;

  for (current; current < arr.length; current++) {
    if (arr[current] !== arr[current + 1]) {
      arr[store] = arr[current];
      store++;
    }
  }
  arr.length = store;
  return arr;
};
// console.log(removeDuplicates([0,1,1,2,2,3,3,4,5,6,6]))
//8- Remove Element
const removeElement = (arr, val) => {
  let store = 0;
  let current = 0;

  for (current; current < arr.length; current++) {
    if (arr[current] !== val) {
      arr[store] = arr[current];
      store++;
    }
  }
  arr.length = store;
  return arr;
};
// console.log(removeElement([1,2,3,5,6,7] , "7"));

//9-implement a string
const strStr = (hayStack, needle) => {
  if (needle.length == 0 || needle == hayStack) {
    return 0;
  }
  if (hayStack.length < needle.length) {
    return -1;
  }
  for (let i = 0; i < hayStack.length - needle.length + 1; i++) {
    if (hayStack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (hayStack[i + j] !== needle[j]) {
          break;
        } else {
          return i;
        }
      }
    }
  }
  return -1;
};
// console.log(strStr("HelloEveryOn", "Every"));
//10-Search Insert Position
const searchInsert = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value || arr[i] > value) {
      return i;
    } else if (value > arr[arr.length - 1]) {
      return arr.length;
    }
  }
};
console.log(searchInsert([1, 2, 3, 5], 0));
