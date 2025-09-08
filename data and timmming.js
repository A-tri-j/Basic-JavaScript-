// Create a new Date object with current date & time
let myDate = new Date();

// Print full date & time as a string
console.log(myDate.toString());

// Print only date part (needs ())
console.log(myDate.toDateString());

// Print localized date string (like dd/mm/yyyy)
console.log(myDate.toLocaleDateString());


// Create date using year, month (0-based), day
// 7 = August (because months start from 0)
let myCreateDate = new Date(2025, 7, 8);
console.log(myCreateDate.toDateString()); // Fri Aug 08 2025


// Create date using ISO format (YYYY-MM-DD)
// Here month is NOT zero-based
let CreateDate = new Date("2025-08-08");
console.log(CreateDate.toDateString()); // Fri Aug 08 2025


// Get current timestamp in milliseconds since Jan 1, 1970
let mytimeStemp = Date.now();
console.log(mytimeStemp);

// Get timestamp for a custom date
console.log(myCreateDate.getTime());


// New date object for current date
let newDate = new Date();
console.log(newDate);

// Get month number (0 = Jan, so add +1 to make it human readable)
console.log(newDate.getMonth() + 1);

// Get day of week (0 = Sunday, 6 = Saturday)
console.log(newDate.getDay());


// Print weekday in words (like "Monday")
console.log(newDate.toLocaleString('default', { weekday: "long" }));
