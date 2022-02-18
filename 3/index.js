//An array of numbers that we want to get
//the average of.
var nums = [2, 10, 9, 6, 12, 3];

//Work out the sum of the numbers in
//our array
var totalSum = 0;
for(var i in nums) {
    totalSum += nums[i];
}

//Work out how many numbers are
//in our array.
var numsCnt = nums.length;

//Finally, get the average.
var average = totalSum / numsCnt;

//Print the median / average to the console.
//In this case, the average is 7.
console.log('Average is: ' + average);