/**
 * ? các phương thức thường xuyên làm việc với chuỗi.
 * ! 1. length
 * ! 2. find index
 * ! 3. cut string
 * ! 4. replace
 * ! 5. convert to upper case
 * ! 6. convert to lower case
 * ! 7. trim
 * ! 8. split
 * ! 9. get a character by index
 */

var myString = 'i study JS and JS , JS as F8';

// 1. length
var lengthString = myString.length;
console.log(lengthString);

// 2. find index
var indexFirstString = myString.indexOf('JS')
var indexString = myString.indexOf('JS', 9)
var indexLastString = myString.lastIndexOf('JS')
console.log(indexFirstString);
console.log(indexString);
console.log(indexLastString);

// 3. cut string 
// @param: start index, end index.
var cutString = myString.slice(8)
var cutOneString = myString.slice(8, 20) 
console.log(cutString);
console.log(cutOneString);

// 4. replace 'ghi de'
var replaceString = myString.replace('JS', 'javaScript',)
var replaceAllString = myString.replace(/JS/g, 'javaScript');
console.log(replaceString)
console.log(replaceAllString)

// 5, 6
const myString1 = ' javaScript and Reactjs ';
console.log(myString1.toUpperCase())
console.log(myString1.toLowerCase())

// 7. trim
const trimString = myString1.trim()
console.log(myString1.length)
console.log(trimString.length)

// 8. split -> tach thanh array
const splitString = trimString.split(' and ')
console.log(splitString)

const testString = 'javaScript'
console.log(testString.split(''))

// 9. get a character by index
console.log(testString.charAt(3))