function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("You can't divide by 0");
    }
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Invalid data type");
    }
    return numerator / denominator;
}

try {
    let result = divide(10, 0);
    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Execution completed.");
}
