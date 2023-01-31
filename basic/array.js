/**
 *  ! lam quen vs mang
 *  1. tao mang
 *  2. truy xuat mang.
 *  - do dai mang
 *  - lay phan tu theo index
 * 
 * ! lam viec vs mang
 * 1. To string
 * 2. join
 * 3. pop
 * 3. push
 * 4. shift
 * 5. unshift
 * 6. splicing
 * 7. concat
 * 8. slicing
 */

// ! lam quen vs mang
var languages = ["javascript", "reactJs", "nodeJs"];
const isArray = Array.isArray(languages)
console.log(isArray)

// 2.1. do dai mang
const lengthArray = languages.length;
console.log(lengthArray);

// 2.2. lay phan tu theo index
console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);

// ! lam viec vs mang

//1. to string  -> convert from array to string
console.log(languages.toString()) 
// * KQ: javascript,reactjs,nodejs

//2. join   -> convert from array to string by separator
console.log(languages.join(', '));
console.log(languages.join(': '));
// * KQ: javascript, reactjs, nodejs // javascript: reactJs: nodeJs


//3. pop    -> remove the last element from an array and returns it
console.log(languages.pop())
// * KQ: nodejs

//4. push   -> appends new elelements to the end of the array and return the new length
console.log(languages.push('nodejs'))

//5. shift  -> remove the first element from an array and returns it
console.log(languages.shift())

//6. unShift    -> insert new elements at the start of the array and return the new length
console.log(languages.unshift('javascript', 'bootstrap'))

//7. splicing -> trai nghiem
// @param: start index of element
// @param: count elements to remove
// @param: insert element at index
languages.splice(1, 1)
console.log(languages)
console.log(languages.length)

// 8. concat    -> noi mang
// 9. slice     -> cat thanh mang con
const subArray = languages.slice(2,3)
// console.log(subArray);




