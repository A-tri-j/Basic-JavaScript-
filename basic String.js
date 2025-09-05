// ------------------- String Basics -------------------

const name = "atrij";
const repocount = 50;

// Old way of concatenation (not recommended)
console.log(name + repocount + " value"); 
// Output: atrij50value

// Modern way: Template Literals (Recommended)
console.log(`hello my name is ${name} and my repo count is ${repocount}`);
// Output: hello my name is atrij and my repo count is 50


// ------------------- String Object -------------------

const gamename = new String("atrij_ghosh"); 
// String can also be created as an object

console.log(gamename[0]);      
// Access character by index → 'a'

console.log(gamename.__proto__); 
// Shows all string methods available (prototype chain)


// ------------------- String Properties & Methods -------------------

console.log(gamename.length);      
// String length → 11

console.log(gamename.toUpperCase()); 
// Convert to uppercase → 'ATRIJ_GHOSH'

console.log(gamename.charAt(2));   
// Character at index 2 → 'r'

console.log(gamename.indexOf('t')); 
// Index of first occurrence of 't' → 1


// ------------------- substring() vs slice() -------------------

const newString = gamename.substring(0, 4); 
// substring(start, end) → does not allow negative values
// Extracts from index 0 to 3 (end-1)
// Output: 'atri'

console.log(newString);

const anotherString = gamename.slice(-8, 4); 
// slice(start, end) → supports negative indexes
// Starts from -8 (count from end), stops before index 4
// Output: 'ri'

console.log(anotherString);


// ------------------- trim() -------------------

const newStringone = "          atrij       "; 
console.log(newStringone); 
// With spaces → "          atrij       "

console.log(newStringone.trim()); 
// Removes extra spaces from start & end → "atrij"


// ------------------- replace() -------------------

const url = "www.google.com";
console.log(url.replace('.', '-'));
// Replaces first '.' with '-' → "www-google.com"


// ------------------- split() -------------------

console.log(gamename.split('_')); 
// Splits string into array at '_' → ["atrij", "ghosh"]
