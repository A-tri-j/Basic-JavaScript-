// ✅ Function declaration is hoisted (can be used before definition)
console.log(addone(5))   // Output: 6

function addone(num) {
    return num + 1
}

// ❌ Function expression with const is NOT hoisted
// At this point, 'addtwo' is in the "temporal dead zone"
// So calling addtwo(5) here will throw ReferenceError
// addtwo(5)  

// ✅ Correct usage: define first, then call
const addtwo = function(num) {
    return num + 2
}

console.log(addtwo(5))   // Output: 7




// Arrow function

// Function with explicit return
const addtwonumber = (num1, num2) => {
    return num1 + num2;
}

// Function with implicit return (shorter syntax)
const addnumber = (num1, num2) => num1 + num2;

// Calling the first function
console.log(addtwonumber(5, 3)) // → 8
