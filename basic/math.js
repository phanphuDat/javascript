
// * Math.random() return random number between 0 and 1 inclusive
const test1 = Math.random();

//
const test2 = Math.random() * 2 ;

// 
const test3 = Math.floor(Math.random() * 10) + 1;

const getRandNumbers = (min, max, length) => {
    var array = [];
    for (var i = 0; i < length; i++) {
        array.push(Math.random() * (max - min) + min);
    }
    return array;
}

getRandNumbers(1, 3, 5)