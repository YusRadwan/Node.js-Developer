// Number /////////////////////////////////////////////
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Number(100000)); // 100,000
console.log(1e5); // 100,000
console.log(15e4 - 5e4); // 100,000
console.log(1e3 * 1e2); // 100,000
console.log(1_000_00); // 100000
console.log(1e2 ** 25e-1); // 100000
console.log(100000.0); // 100000
console.log(0b11000011010100000); // 100000
console.log(Number("100000")); // 100000
console.log(1e5 / 1); // 100000

/////////////////////////////////////////////
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

/////////////////////////////////////////////
console.log(Math.floor(Number.MAX_SAFE_INTEGER / Math.pow(2, 49)) + true);

/////////////////////////////////////////////
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

/////////////////////////////////////////////
let num = 10;

console.log(Number.isInteger(num % 8) + Number.isInteger(num / num)); // 2

/////////////////////////////////////////////

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.fround(flt.toFixed(0))); // 10
console.log(Number(flt.toFixed(0))); // 10
console.log(parseInt(flt)); // 10

/////////////////////////////////////////////

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

// String /////////////////////////////////////////
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(); // e
console.log(); // e
console.log(userName.trim().at(0).toLowerCase().repeat(3)); // eee

////////////////////////////////////
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True