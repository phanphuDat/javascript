/**
 * ! lam viec vs number
 *  1. kiem tra dataType.
 *  2. To String -> chuyen 1 so thanh 1 chuoi
 *  3. To Fixed -> lam tron so
 */

const age = 23.1111

// 1. kiem tra dataType
// @param. isNaN false -> is a number, true -> is not a number

console.log(isNaN(age))

// 2. To String

console.log(age.toString())

// 3. To Fixed
const pi = 3.14
const num = 3.5
console.log(age.toFixed(2))
console.log(pi.toFixed())
console.log(num.toFixed())


const isNumber = (num) => {
    console.log(isNaN(num) && typeof num !== 'number' ? false : true)
}

isNumber('a')