let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";


let myStr = myString.split(",").filter(function(ele) {
    return isNaN(ele);
}).map(function(elem) {
    return elem !== "_" ? elem: " ";
}).reduce(function(acc, curVal) {
    return `${acc}${curVal}`;
}).slice(true, -1)

console.log(`Result is = ${myStr}`);