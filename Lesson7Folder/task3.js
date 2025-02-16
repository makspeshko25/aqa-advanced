function divide(numerator,denominator){
    try{
    if(denominator===0){
        throw new Error("you can't divide by 0");
    } if(typeof denominator!=="number"||typeof numerator!=="number"){
        throw new Error("Invalid data type");
    }
    const result=numerator/denominator;
    return result;
} catch (error) {
    console.log("Error:", error.message);
    return null;
} finally {
    console.log("Execution completed.");
}
}

console.log(divide(1,0))