//Recursively compute and return numth Fibonacci value
//rFib(5) = 5 (2+3) ,rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.
const rFib = (num) => {
  if (num <= 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else if (num >= 2) {
    num = Math.floor(num);
    return rFib(num - 1) + rFib(num - 2);
  }
};
// console.log(rFib(3.62));

//Recursive “Tribonacci”
const rTrib = (num) => {
  if (num < 0) {
    return num;
  } else if (num == 0 || num == 1) {
    return 0;
  } else if (num == 2 || num == 3) {
    return 1;
  } else {
    return rTrib(num - 3) + rTrib(num - 2) + rTrib(num - 1);
  }
};
// console.log(rTrib(3) )
//Recursive Ackermann
const ackermann = (num1, num2) => {
 if (num1 >= 0 && num2 >=0){
    if (num1 == 0) {
      return num2 + 1;
    } else if ((num2 ==0 && num1 > 0)) {
      return ackermann(num1 - 1, 1);
    } else {
      return ackermann(num1 - 1, ackermann(num1, num2 - 1));
    }
  }else {
    "enter non negative integers"
  }
};
console.log(ackermann(3, 4));
//zibonacci
const zibonacci= (num)=> {
  if(num < 0){
    return num;
  }else if(num == 0 || num==1){
    return 1;
  }else if (num ==2){
    return 2;
  }else if(num>=3 && num %2 ==1 ){ //odd numbers
    return 
  }else if (num >=4 && num%2 ==0 && num/2 > 1){
    return zibonacci(num/2)+zibonacci(num/2+1)+1
  }
}

