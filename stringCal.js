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
        sum += num;
    }
    return sum;
}

console.log(add(''));         // 0
console.log(add("1"));        // 1
console.log(add("1,5"));      // 6
console.log(add("1\n2,3"));   // 6