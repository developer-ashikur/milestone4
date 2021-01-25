function addNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
        
    }
    return sum;
}
const result = addNumbers(2, 5, 6, 4, 3, 67, 4, 36, 5);
console.log(result);