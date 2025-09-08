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
