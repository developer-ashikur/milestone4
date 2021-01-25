function findEvenOdd(nums) {
  for (let i = 0; i < nums.length; i++) {
    var evenArray = [];
    var oddArray = [];
    const num = nums[i];

    if (num % 2 == 0) {
      
      evenArray.push(num);
      console.log(evenArray);
    } else {
      
      oddArray.push(num);
      oddArray;
    }
  }
}
const marks = [87, 97, 58, 58, 97, 67, 96, 46, 37, 75, 73];
findEvenOdd(marks);

