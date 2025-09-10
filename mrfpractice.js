


// 1. [mangoe, orange, apple] add the word S to end of each string.
// 2. [10,11,12,89,35,156,199,25,32,87] Find the numbers which are greater than 80 from given array.
// 3. [10,12,15,16,8,11] Find the largest/ greates number in an array.

const arr = ["apple","orange","mango"]
const outputMap = arr.map((x) => x + "s"); 

console.log("Map output");
console.log(outputMap);


const arrNum = [10,11,12,89,35,156,199,25,32,87]
const outputFltr= arrNum.filter((x) => x > 80);  

console.log("Filter output");
console.log(outputFltr);


