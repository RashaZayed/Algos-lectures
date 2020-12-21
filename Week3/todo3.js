// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array.
// rBinarySearch([1,3,5,6],4) = false;
// rBinarySearch([4,5,6,8,12],5) = true;

const rBinary = (arr, value) => {
  let mid = Math.floor(arr.length / 2);
  if (value == arr[mid]) {
    return true;
  } else if (value < arr[mid] && arr.length > 1) {
    return rBinary(arr.slice(0, mid), value);
  } else if (value > arr[mid] && arr.length > 1) {
    return rBinary(arr.slice(mid, arr.length), value);
  } else {
    return false;
  }
};
// console.log(rBinary([1, 2, 3, 4, 5, 6], 3));

//Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both)
const rGCF = (num1, num2) => {
  if (num1 == 0 || num2 == 0) {
    //if 0 and num always return num
    return Math.abs(num1 - num2); //0 is a common factor of all numbers
  } else if (num1 == num2) {
    return num1;
  } else if (num1 > num2) {
    return rGCF(num1 - num2, num2);
  } else if (num1 < num2) {
    return rGCF(num1, num2 - num1);
  }
};
//Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).
const rGCF2 = (num1, num2) => {
  if (num1 == num2) {
    return num1;
  } else if (num1 == 0 || num2 == 0) {
    return Math.abs(num1 - num2);
  } else if (num1 > num2) {
    if ((num1 / num2) % 1 === 0) {
      return num2;
    } else {
      return rGCF2(num1 - num2, num2);
    }
  } else if (num2 > num1) {
    if ((num2 / num1) % 1 === 0) {
      return num1;
    } else {
      return rGCF2(num1, num2 - num1);
    }
  }
};
console.log(rGCF2(20000, 1000));

//Tarai
//tarai(x,y,z) == y, if x <= y (otherwise see rule #2);
//tarai(x,y,z) == tarai(tarai(x-1,y,z),tarai(y-1,z,x),tarai(z-1,x,y)).
//Calling tarai(10,2,9) should return 9 (after recursing 4145 times!).
count=0;
const tarai = (x,y,z)=> {
 
  if (x <=y){
    count++;
    console.log(count)
    return y;
  }else {
    count++;
    console.log(count)
    return tarai(tarai(x-1 , y , z), tarai(y-1 , z,x), tarai(z-1 , x,y))
  }
  
}
//count = 4145
console.log(tarai(10,2,9))

//Create strSubsets(str). Return an array with every possible in-order character subset of str.
// The resultant array itself need not be in any specific order
// – it is the subset of letters in each string that must be in the same order as they were in the original string.
// Given "abc", return an array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).
const strSubsets = (str)=> {
  let newStrArr=[];
  for(let i=0;   str.length          ;i++){
    newStrArr[i]= str[i];
    for(let j=i+1 ;   j<str.length            ;j++){
      newStrArr[]

    }
  }
}
