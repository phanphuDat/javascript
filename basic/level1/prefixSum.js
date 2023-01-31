
// ! running sum of 1d arrays
// ! output: [a[0], a[0]+a[1], a[0]+a[1]+a[2], ...]

var nums = [1, 2, 3, 4];
var sum = 0;

var runningSum = function (nums) {
  let arraySum = [];
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    arraySum.push(sum);
  }
  return arraySum;
};

runningSum(nums);

// ! find pivot index
// ! input: [1,7,3,6,5,6]  --> output: 3 ( 1+7+3 = 5+6 )

var pivotIndex = function(nums) { 
  var sum = 0; 
  var msum = 0; 
  for( var i = 0; i < nums.length; i ++) {
    sum += nums[i];
  }
  for (var i = 0; i < nums.length; i ++) {
    sum -= nums[i];
    if ( sum === msum ) {
      return i;
    }
    msum += nums[i];
  }
  return -1;
}

pivotIndex([1,2,3])
