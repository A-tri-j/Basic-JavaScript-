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
