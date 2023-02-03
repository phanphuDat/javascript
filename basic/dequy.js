// xac dinh diem dung
// logic handle nhung van suy ra diem dung.

// * 6! = ?

//giai quyet bang vong lap.

const loopGiaiThua = (num) => {
    var result = 1;
    for( var i = 1; i <= num; i ++) {
        result = result * i;
    }
    return result;
}

console.log(loopGiaiThua(6));

//giai quyet bang dequy.

const dequyGiaiThua = (num) => { 
    if ( num > 0 ) {
        return num * dequyGiaiThua(num - 1)
    }
    return 1;
}

console.log(dequyGiaiThua(6));
