const numbersList = [1,10,14,2,4,5,43,34];
const newArray = numbersList.slice();
const sortedArray = newArray.sort((a, b) => a - b);
console.log(numbersList);
console.log(newArray);