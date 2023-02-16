// html dom.
// 1. Element   -> id, class, tag, css selector, html collection.
// 2. attributes
// 3. text.

// id.
var h1Id = document.getElementById('heading');
console.log(h1Id);

// class.
console.log('------------------------------------------------------');
var h1Class = document.getElementsByClassName('chead')
console.log(h1Class);

// tag.
console.log('------------------------------------------------------');
var h1Tag = document.getElementsByTagName('h1');
var h1Tag1 = document.getElementsByTagName('h1')[0];
console.log(h1Tag);
console.log('------------------------------------------------------');
console.log(h1Tag1);

//css selector
console.log('------------------------------------------------------');
var h1Select = document.querySelector('#test');
console.log(h1Select);

console.log('------------------------------------------------------');
var h1Select2 = document.querySelectorAll('.chead')
console.log(h1Select2);

console.log('------------------------------------------------------');
var h1Select3 = document.querySelector('.box .getSelect')
console.log(h1Select3);

