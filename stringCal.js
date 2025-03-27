function add(numbers) {
    if (!numbers) return 0; // Empty input should return 0

    let delimiter = /,|\n/; // Default delimiters: comma (,) and newline (\n)
    let startIndex = 0;

    let sum = 0;
    const numArray = numbers.substring(startIndex).split(delimiter);

    for (const numStr of numArray) {
        if (numStr.trim() === "") continue; // Skip empty values
        const num = parseInt(numStr, 10);
        if (isNaN(num)) continue; // Skip invalid numbers
        if (num < 0) {
            throw new Error(`Negative numbers not allowed: ${num}`);
        }
        sum += num;
    }
    return sum;
}

try {
    console.log(add(''));         // 0
    console.log(add("1"));        // 1
    console.log(add("1,5"));      // 6
    console.log(add("1\n2,3"));   // 6
    console.log(add("1,-2,3")); // Should throw error
} catch (error) {
    console.error(error.message); // "Negative numbers not allowed: -2"
}