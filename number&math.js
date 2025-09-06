// Number examples
const score = 400
console.log(score)   // Prints: 400 (primitive number)

// Creating number object explicitly
const balance = new Number(100)
console.log(balance)   // Prints: [Number: 100]

// Converting number to string and checking its length
console.log(balance.toString().length); // "100" → length is 3

// Fixing decimal places (rounds to given precision)
console.log(balance.toFixed(1)); // 100.0

// Precision control
const otherNumber = 12.32556
console.log(otherNumber.toPrecision(4)); // 12.33 (4 significant digits)

// Formatting number with commas according to Indian system
const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,00,000

// =====================
// Math Object Examples
// =====================

console.log(Math);  // Prints Math object with all methods

console.log(Math.abs(-4));     // Absolute value → 4
console.log(Math.round(4.6));  // Rounds to nearest integer → 5
console.log(Math.ceil(4.2));   // Always rounds up → 5
console.log(Math.floor(4.9));  // Always rounds down → 4
console.log(Math.min(4, 3, 6, 8)); // Minimum → 3
console.log(Math.max(4, 3, 6, 8)); // Maximum → 8

// Random number examples
console.log(Math.random());          // Random number between 0 and 1
console.log((Math.random() * 10) + 1); // Random number between 1 and 10

// Random number between a given range (min to max)
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// Random integer between 10 and 20 (inclusive)
