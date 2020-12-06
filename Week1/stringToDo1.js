//1-remove blanks
const removeStrBlanks = (str) => {
  var arr = str.split(" ");
  return arr.join("");
};
console.log(removeStrBlanks("Hello This is Rasha Zayed"));

//2-Get integers From String
const getDigits = (str) => {
  var arr = str.split("");
  var strInt = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 1 == 0) {
      strInt += arr[i];
    }
  }
  return strInt;
};
console.log(getDigits("Ra0sh3.4a3i5saf9emalful5lst6a8ckdev"));

//3-Acronyms
const acronyms = (str) => {
  var arrOfStr = str.split(" ");
  var newStr = "";
  for (let i = 0; i < arrOfStr.length; i++) {
    if (arrOfStr[i] == false) {
      continue;
    }
    newStr += arrOfStr[i][0].toUpperCase();
  }
  return newStr;
};
console.log(acronyms("Hello    This is Rasha - Zayed"));

//4-count non spaces in str
const nonSpacescount = (str) => {
  const arr = str.split("");
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == false) {
      continue;
    }
    count++;
  }
  return count;
};
console.log(nonSpacescount("Hello World!")); //11

//5-Remove Shorter Strings from Array used new Array
const removeShorter = (arr, len) => {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < len) {
      continue;
    }
    newArr.push(arr[i]);
  }
  return newArr;
};
console.log(removeShorter(["hello", "this", "is", "me", "Rasha"], 3));

//5-Remove Shorter Strings from Array used same Array
const removeShortStr = (arr, len) => {
  var current = 0;
  var store = 0;

  while (current < arr.length) {
    if (arr[current].length >= len) {
      arr[store] = arr[current];
      store++;
    }
    current++;
  }
  arr.length = store;
  return arr;
};
console.log(removeShortStr(["hello", "this", "is", "me", "Rasha"], 3));
