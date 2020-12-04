//1
const pushFront = (arr , val)=> {
    const newArr=[];
    newArr[0]= val;
    for(var i=0;  i<arr.length     ; i++){

        newArr[i+1] = arr[i];

    }
    return(newArr)

};
console.log(pushFront([2,3,4,5,6] , 1));

//2
const popFront = (arr , val)=> {
    const newArr=[];

    for(var i=1; i<arr.length ; i++){
        newArr[i-1]=arr[i]

    }
    return newArr;
}
console.log(popFront([2,4,6,8]));

//3-Insert At
const insertVal = (arr , val , index) => {
    var newArr = [];
    for(var i=0; i<index ; i++){
    newArr[i]=arr[i]
}
    newArr[index]=val;
    for(var i=index+1;  i<=arr.length   ;i++){
        newArr[i]=arr[i-1]
    }
    console.log(newArr)
    return newArr;
}
console.log(insertVal([1,2,3,4,5,6] , 0 , 2));

//4-Remove At
const removeAtIndex = (arr , index)=> {
  
    var newArr= [];
    for (var i=0;   i<index            ;i++){
      newArr[i]=arr[i];
    }
    for(var i=index+1 ;    i<arr.length-1      ;i++){
    newArr[i-1]= arr[i]
    }
    return (newArr);

}
console.log(removeAtIndex([1,2,3,0,4,5,6],3));

//5-swap pairs  not yet

const swapPairs = (arr) => {
  for (let i = 0; i < arr.length-1; i=i + 2) {
      var temp;
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
};
console.log(swapPairs([1, 2, 3, 4, 5, 6]));

//6-delete duplicates

const removeDup = (arr)=> {
    const newArr = [];
  for(let i=0;   i<arr.length-1     ;i++){
    if(arr[i] !== arr[i+1]){
      newArr.push(arr[i]);
    }
  }
  return newArr
}
console.log(removeDup([1,1,2,2,3,3,3,4,5,6,6,7]));

