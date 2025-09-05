// ------------------- Primitive Data Types -------------------
// 7 primitive types in JavaScript: string, number, boolean, null, undefined, symbol, bigint

const score = 100;              // number (integer)
const scoreValue = 100.34;      // number (float/decimal)

const isLoggedIn = false;       // boolean
const outsideTemp = null;       // null (intentional empty value)
let userEmail;                  // undefined (no value assigned)

const id = Symbol('123');       // symbol (unique identifier)
const anotherId = Symbol('123');// even with same description, both are different

console.log(id === anotherId);  // false (every symbol is unique)

const bigNumber = 3445785420565244444n; // BigInt (for very large numbers)


// ------------------- Reference (Non-primitive) -------------------
// Non-primitive types: Array, Object, Function

const heros = ["shaktiam", "naagraj", "doga"]; // Array

let myobj = {                // Object
  name: "atrij",
  age: 20
};

const myfunction = function() { // Function (stored in a variable)
  console.log("hello world");
};


// ------------------- Stack (Primitive) -------------------
// In stack memory, a copy of the value is stored.

let myname = "atrijghosh";     // original variable
let anothername = myname;      // copy of value is assigned
anothername = "chai or code";  // modifying copy does not affect original

console.log(myname);           // "atrijghosh" (original unchanged)
console.log(anothername);      // "chai or code" (only copy changed)


// ------------------- Heap (Non-primitive) -------------------
// In heap memory, reference (address) is stored, not the actual copy.

let userone = {                // Object stored in heap
    email: "username",
    upi: "Useer@api"
};

let usertwo = userone;         // usertwo gets reference of userone
// Both point to the same object in heap

usertwo.email = "atrij@gamial"; // changing usertwo also changes userone

console.log(userone.email);     // "atrij@gamial" (updated)
console.log(usertwo.email);     // "atrij@gamial" (same reference)
