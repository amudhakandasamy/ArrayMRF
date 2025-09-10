


// 1. [mangoe, orange, apple] add the word S to end of each string.



const arr = ["apple","orange","mango"]
const outputMap = arr.map((x) => x + "s"); 

console.log(arr);
console.log("using Map plural the singular word");
console.log(outputMap);

// 2. [10,11,12,89,35,156,199,25,32,87] Find the numbers which are greater than 80 from given array.
const arrNum = [10,11,12,89,35,156,199,25,32,87]
const outputFltr= arrNum.filter((x) => x > 80);  

console.log(arrNum);
console.log("using Filter printing the value greater than 80");
console.log(outputFltr);


// 3. [10,12,15,16,8,11] Find the largest/ greates number in an array.

const arrRdc = [10,12,15,16,8,11]

const outputRed= arrRdc.reduce((pNumb , nxtNum) => {
  return pNumb < nxtNum ? nxtNum : pNumb;
})

console.log(arrRdc);
console.log("using reduce printing the greatest number in Array");
console.log(outputRed);