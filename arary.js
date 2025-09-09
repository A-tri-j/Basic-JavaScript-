// Array declaration
const myArr = [0, 4, 5, 8, 10]

// Wrong usage: console.count() needs a label (string)
// Here it will just print "default: 1"
console.count(myArr)  

// -------------------- Array methods --------------------

// Push adds elements at the end
myArr.push(6)       // [0,4,5,8,10,6]
myArr.push(4)       // [0,4,5,8,10,6,4]

// Pop removes the last element
myArr.pop()         // [0,4,5,8,10,6]

console.log(myArr)  // [0,4,5,8,10,6]

// Unshift adds element at the beginning
myArr.unshift(9)    // [9,0,4,5,8,10,6]

// Shift removes the first element
myArr.shift()       // [0,4,5,8,10,6]

console.log(myArr)  // [0,4,5,8,10,6]

// includes() checks if element is present → true/false
console.log(myArr.includes(9))   // false

// indexOf() returns index of element, or -1 if not found
console.log(myArr.indexOf(3))    // -1

// join() converts array into a string (comma-separated by default)
const newArr = myArr.join()
console.log(newArr)              // "0,4,5,8,10,6"
console.log(typeof newArr)       // string

// -------------------- slice vs splice --------------------

console.log("A    " + myArr)     // Original array before slice: [0,4,5,8,10,6]

// slice(start, end) → extracts part of array (end not included), doesn't change original
const myar = myArr.slice(1, 3)   
console.log(myar)                // [4,5]
console.log("B   " + myArr)      // Still original: [0,4,5,8,10,6]

// splice(start, deleteCount) → removes elements from original array
const myarrr = myArr.splice(1, 3)
console.log(myarrr)              // [4,5,8] (removed elements)
console.log("C   " + myArr)      // Modified array: [0,10,6]



// Array of Marvel heroes
const marvel_heros = ["thor", "ironman", "spiderman"];

// Array of DC heroes
const dc = ["superman", "flash", "batman"];

// ❌ If we use push, it will insert the entire 'dc' array as a single element
marvel_heros.push(dc);
console.log("After push:", marvel_heros);
// Output: ["thor","ironman","spiderman",["superman","flash","batman"]]

// ✅ concat() merges two arrays into a NEW array (does not change original)
const allHeros = marvel_heros.concat(dc);
console.log("Using concat:", allHeros);
// Output: ["thor","ironman","spiderman",["superman","flash","batman"],"superman","flash","batman"]

// ✅ Spread operator (...) is a cleaner modern way to merge arrays
const all_new_heros = [...marvel_heros, ...dc];
console.log("Using spread:", all_new_heros);
// Output: ["thor","ironman","spiderman",["superman","flash","batman"],"superman","flash","batman"]

// Nested array (multi-level array)
const real_another_array = [1, 2, 3, 4, [5, 6, 7], 8, 6, [11, 12, [15, 16]]];
console.log("Nested array:", real_another_array);
// Output: [1,2,3,4,[5,6,7],8,6,[11,12,[15,16]]]

// ✅ flat() method flattens nested arrays
console.log("Flattened array:", real_another_array.flat(Infinity));
// Output: [1,2,3,4,5,6,7,8,6,11,12,15,16]

// ✅ Array.isArray() checks if given value is an array
console.log(Array.isArray("Atrij"));   // false (because "Atrij" is a string)

// ✅ Array.from() converts iterable/string into array
console.log(Array.from("Atrij"));      // ['A','t','r','i','j']

// ⚠️ Passing object directly -> returns empty [] because object is not iterable
console.log(Array.from({name: "Atrij"})); // []

// ✅ Array.of() creates array from individual values
let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3)); 
// Output: [100,200,300]
