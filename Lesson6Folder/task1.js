// Function declaration
// function sqrCalculation(width,height){
//     const sqr=width*height
//     return sqr
// }
// const result=sqrCalculation(5,10);
// console.log(result);

// Function expression
// const sqrCalculation= function(width,height){
//     const sqr=width*height
//     return sqr
// }
// console.log(sqrCalculation(5,10))

// Arrow function expression
const sqrCalculation = (width, height) => {
  const sqr = width * height;
  return sqr;
};
console.log(sqrCalculation(5, 10));
