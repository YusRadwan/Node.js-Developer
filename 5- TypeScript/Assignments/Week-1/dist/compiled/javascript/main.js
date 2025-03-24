// Ask 1
console.log("Hello World, I TypeScript");
//Ask 2
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20)); // 30
//   console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2
// Ask 3
function printInfo(valueOne, valueTwo) {
    return "Value One Is ".concat(valueOne, ", Value Two Is ").concat(valueTwo);
}
console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
// Ask 4
var arr;
var arr2 = [1, [true, false], ["string", ["string", 33]], "err"];
// // Ask 5
//     function reportErrors(username, age: number) {
//         let rank = "Professor";
//         return `Username: ${username}`;
//         console.log("We Will Not Reach Here");
//     }
//     // 1) "noImplicitAny": false
//     // 2) "noUnusedParameters": true
//     // 3) "noUnusedLocals": true
//     // 4) "allowUnreachableCode": false
//     console.log(reportErrors("Elzero", 40));
// Ask 6
var nothing;
var theName = "Elzero";
function showMyDetails(a, b, c) {
    if (a === void 0) { a = ""; }
    if (b === void 0) { b = ""; }
    return "".concat(a).concat(b).concat(c);
}
// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(undefined, undefined, theName)); // Elzero
// Ask 7
// oldd -> (user: number, age: boolean, country: boolean)
function showMsg(user, age, country) {
    return "".concat(user).concat(age).concat(country);
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
// Ask 8
// Write The Function Here
function printInConsole() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = num.forEach(function (element) {
        console.log("The Value Is ".concat(element, " And Type Is ").concat(typeof (element)));
    });
    return result;
}
;
// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
