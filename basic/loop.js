/**
 *  * vong lap - loop.
 * 1. for - lap vs dieu kien dung
 * 2. for/in - lap qua key cua doi tuong
 * 3. for/of - lap qua value cua doi tuong
 * 4. while - lap khi dieu kien dung
 * 5. do/while - lap it nhat 1 lan, sau do lap lai khi dieu kien dung
 */

var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];

for(var key in orders) {
    console.log(key);
    console.log(orders[key].name)
}

const getTotal = (orders) => {
  var sum = 0;
  for (var i = 0; i < orders.length; i++) {
    sum += orders[i].price;
  }
  return sum;
};

getTotal(orders)

var myInfo = {
    name: "phan dat",
    age: 24,
    adress: 'quang ngai'
}

for( var key in myInfo ) {
    console.log(key);
    console.log(myInfo[key])
}

var myString = 'javascript';
for( var key in myString) {
    console.log(key);
    console.log(myString[key]);
}

