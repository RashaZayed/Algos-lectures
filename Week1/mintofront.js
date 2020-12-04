//using newArray
// const minToFront = (arr) => {
//     let newArr = [];
//     let min = arr[0];
//     for (let i=0; i< arr.length     ;i++){
//        if( arr[i] <= min) {
//            min= arr[i]
//        }

//        newArr[0]=min;
//        for(let i=1; i < arr.length       ;i++){
//            if(arr[i] !== min){
//            newArr[i]=arr[i-1];
//        }

//     }
// }
// return newArr
// }
// console.log(minToFront([2,6,3,8,9,1]))

//using samearray
const minToFront = (arr) => {
  //get the min and switch it with the previous array elements until first element
  let idx;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      idx = i;
    }
  }
  for (let index = idx; index > 0; index--) {
    let temp = arr[index];
    arr[index] = arr[index - 1];
    arr[index - 1] = temp;
  }
  return arr;
};
console.log(minToFront([2, 6, 3, 8, 9, 1]));
