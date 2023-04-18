/*
5.	(bonus) According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits,
 and repeat the process until the number equals 1 (where it will stay),
  or it loops endlessly in a cycle which does not include 1. 
  Those numbers for which this process ends in 1 are happy numbers, 
  while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers.


*/
// var isHappy = function(n) {
//     var seen = {};
//     while (n !== 1 && !seen[n]) {
//         seen[n] = true;
//         n = sumOfSquares(n);
//     }
//     return n === 1 ? true : false;
// };

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}

const squareSumRecursively = (n, res = 0) => {
    if(n){
       return squareSumRecursively(Math.floor(n/10), res+Math.pow((n%10),2));
    };
    return res;
 };
 const isHappy = (num, map = {}) => {
    if(num !== 1){
       if(map[num]){
          return false;
       }
       map[num] = 1;
       return isHappy(squareSumRecursively(num), map);
    };
    return true;
 }
 console.log('36 is '+isHappy(36));
 console.log('13 is '+ isHappy(13));
 console.log('36 is '+isHappy(36));
 console.log('23 is '+isHappy(23));