///////////////////////////////////////////
// Task Video
let zero = 0;
    counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Amer"];

console.log(my.slice(zero, (++counter)).reverse()); // ['Osama', 'Elham', 'Mazero', 'Ahmed']

console.log(my.slice(++zero, --counter).reverse()); // ['Elham', 'Mazero']

// let my1 = my.splice(zero, zero, "Elzero");
// console.log(my[zero]); // "Elzero"

console.log(my[zero] = "Elzero") // "Elzero"

console.log(my[zero][++counter].concat(my[zero][++counter].toUpperCase())); // "rO"

// let ro = my[zero].substring(my[zero].length - ++zero).split("");
// console.log(ro[0].concat(ro[1].toUpperCase()));

///////////////////////////////////////////

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(myFriends.length - myFriends.length, num)); // ["Ahmed", "Elham", "Osama"];


/////////////////////////////////////////////

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop()

console.log(friends); // ["Eman", "Osama"]

////////////////////////////////////////////////

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo).sort().reverse();

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

////////////////////////////////////////////////

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].substring(website.length).toUpperCase()); // ZERO

/////////////////////////////////////////////////

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
haystack.includes(needle) ? console.log("Found-1") : console.log("Not Found-1")
haystack.indexOf(needle) ? console.log("Found-2") : console.log("Not Found-2")
haystack.lastIndexOf(needle) ? console.log("Found-3") : console.log("Not Found-3")

///////////////////////////////////////////////////

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr2[(arr2.length - arr1.length) + (arr2.length - arr1.length)].concat(arr1[(arr2.length - arr1.length) + (arr2.length - arr1.length)].concat(arr2[arr1.length])).toLowerCase();
// let ss = arr2.concat(arr1).sort().slice(arr2.length);

// Your Code Here

console.log(allArrs); // fxy

