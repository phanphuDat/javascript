/**
 * ! object constructor.
 * nhu mot ban ve cua ngoi nha
 */

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () { 
        return `${this.firstName} ${this.lastName}`
    }
}

const author = new User('phan', 'dat', 'avatar');
const user = new User('phan', 'dat', 'avatar');

author.color='white'
user.weight = '60kg'

console.log(author, author.getName());
console.log(user);