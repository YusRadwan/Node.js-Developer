////////////////////////////////////
    // Comparison && Logical Operator
////////////////////////////////////
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 != 100 && 10 != 20); // true
console.log(-10 == "-10"); // true
console.log(! (-50 == +"-40")); // true
console.log(! (10 >= -"-40")); // true
console.log(! ("10" === 10)); // true
console.log(! (20 == false)); // true

//////////////////////////////////

let num1 = 10;
let num2 = 20;

console.log(num1 != num2); // true
console.log(num1 < num2); // true
console.log(num1 <= num2); // true
console.log(! (num1 == num2)); // true
console.log(!(num1 === num2)); // true
console.log(!(num1 > num2)); // true

//////////////////////////////////////

let a = 20;
let b = 30;
let c = 10;

console.log(a != b && a > c || a < b); // true
console.log(a == b || a != c); // true
console.log(!(a == b) && !(a > b) && !(a < c) && !(a === c)); // true

////////////////////////////////////
 // if Condition //
////////////////////////////////////
let aa = 60;
aa < 10 
    ? console.log(10) 
    : aa <= 10 && aa <= 40 
    ? console.log("10 To 40") 
    : aa > 40 && aa <= 50
    ? console.log("> 40") 
    : console.log("unknowning");

////////////////////////////////////
let st = "Elzero Web School";

if((st.length * 2).toString() === "34"){
    console.log("Good 34");
}

////////////////////////////////////
let str1 = st.toLowerCase();

if (str1[str1.indexOf("w")] === "w"){
    console.log("Good w")
}

////////////////////////////////////

if (typeof(str) !== "string"){
    console.log("Good String")
}

////////////////////////////////////

if (typeof(st.length) === "number"){
    console.log("Good Number")
}

////////////////////////////////////

if (st.slice(0, 6).repeat(2) === "ElzeroElzero"){
    console.log("Good Joe")
}

////////////////////////////////////
    // Switch Statement
////////////////////////////////////

let job = "Support";
    salary = 0;

switch(job){
    case "Manager":
        salary = 8000;
        console.log(`${job} Salary is ${salary}`);
        break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(`${job} Salary is ${salary}`);
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        console.log(`${job} and Designer Salary is ${salary}`);
        break;
    default:
        salary = 4000;
        console.log(`${job} Salary is ${salary}`);
        break;
}

////////////////////////////////////



