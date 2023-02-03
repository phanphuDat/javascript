/**
 *  array method:
 * 1. forEach()  -- duyệt qua các phần tử mảng
 * 2. every()   -- kiểm tra tất cả các phần tử mảng thỏa mản gì đó
 * 3. some()    -- kiểm tra các phần tử mảng chỉ cần có cá thỏa mãn là dừng
 * 4. find()    -- tiềm phần tử trong mảng xem có tồn tại hk và trả về đối tượng đó
 * 5. filter()  -- giống find mà nó trả về index và value luôn
 * 6. map()     -- khi bạn muốn chỉnh sữa hay thay đổi element của array
 * --> thực tế map này dùng để render 1 cái view
 * 7. reduce()  -- khi bạn muốn nhận về 1 giá trị duy nhất khi bạn tính tonas trên
 * các phần tử của array
 */

var courses = [
    {
        id: 1,
        name: 'javaScript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
]
//1     -- lấy ra các khóa học trong mảng 
courses.forEach(function(course,index) {
    console.log(index,course)
});

//2     -- kiểm tra xem tất cả các khóa học đó có coin = 0 hay k
console.log('----------------------------------------------------------------');
var isAllFree = courses.every(function(course,index) {
    return course.coin === 0
})
console.log(isAllFree)

//3     -- kiểm tra xem có khóa nào coin = 0 hay k
console.log('----------------------------------------------------------------');
var isFree = courses.some(function(course, index) {
    return course.coin === 0;
})
console.log(isFree)

//4     -- kiểm tra và trả về cái giá trị khóa chứa tên là ruby
console.log('----------------------------------------------------------------');
var course = courses.find(function(course,index) {
    return course.name ==='ruby'
})
console.log(course)
    
//5     -- kiểm tra và trả về tất cả khóa học chứa tên khóa là ruby
console.log('----------------------------------------------------------------');
var course = courses.filter(function(course,index) {
    return course.name ==='ruby'
})
console.log(course)

//6     -- ta sẽ chỉnh sữa tất cả các tên khóa học theo 
//      -- định dạng: 'khóa học: name'và thêm giá bằng chữ: coinText: 
//cách 1:
// var newCourses = courses.map(function() {

// })
//cách 2: tạo hàm xử lý ở ngoài rồi gọi vào
function courseHandler(eleCourse, index) {
    return {
        id: eleCourse.id,
        name: `Khoa Hoc: ${eleCourse.name}`,
        coin: eleCourse.coin,
        coinText: `Gia: ${eleCourse.coin}`,
        index: index,
        originArray: courses
    }
}
var newCourses1 = courses.map(courseHandler)
console.log(newCourses1)

//7     -- lấy ra tổng số coin của khóa học.
//cách 1: dùng vòng lặp for - of.
var totalCoin = 0
for(var course of courses) {
    totalCoin += course.coin
}

console.log(totalCoin)
//cách 2: reduce
var i = 0
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++
    var total = accumulator + currentValue.coin
    console.table({
        'lượt chạy ': i,
        'biến tích trữ ': accumulator,
        'giá khóa học ': currentValue.coin,
        'tích trữ được ': total
    })
    return total
}
var totalCoin1 = courses.reduce(coinHandler, 0) // 0 là giá trị khởi tạo
console.log(totalCoin1)

// thật sự nó chỉ ngắn thế này thôi

var totalCoin2 = courses.reduce(function(accumulator,currentValue){
    return accumulator + currentValue.coin;
}, 0)
console.log(totalCoin2)


// // PHƯƠNG THỨC REDUCE CÓ LOGIC NHƯ THẾ NÀO? 
// const numbers = [1,2,3,4,5]

// Array.prototype.reduce2 = function(callback, result) {
//     let i = 0
//     if(arguments.length < 2) {
//         i = 1
//         result = this[0]
//     }
//     for(; i < this.length; i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result
// }

// const result = numbers.reduce2((total, number) =>{
//     return total + number
// })
// console.log(result)
