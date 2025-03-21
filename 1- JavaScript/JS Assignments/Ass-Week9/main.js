// Function Arrow Challenges

let names = (...par) => `String [${par.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));


// Challenge 2

let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + +nums;

console.log(calc(10, myNumbers[3], myNumbers[2])); // 80



