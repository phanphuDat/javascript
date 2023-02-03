/**
 * ? input: [a,b,c,d,a,a,c]
 * ? output: [a,b,c,d]
 * 
 * *solution: 1. set
 * *          2. filter
 * *          3. reduce
 */

var oldArr = ["a", "b", "c", "d", "a", "a", "c"];

// SET.

var setArr = new Set(oldArr);
var newArr = [...setArr]
console.log(newArr);

var newArr1 = Array.from(new Set(oldArr))
console.log(newArr1);

// FILTER.


