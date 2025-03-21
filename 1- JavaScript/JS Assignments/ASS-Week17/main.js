let n1 = [10, 30, 20, 10];
let n2 = [30, 10, 20];

let num = [...n1, ...n2];

let result = new Set(num);

console.log(result);
