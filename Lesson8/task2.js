const numbers = [1, 2, 3, 4, 5];
const newArray = numbers.map((num) => num * numbers.indexOf(num));
console.log(newArray);
