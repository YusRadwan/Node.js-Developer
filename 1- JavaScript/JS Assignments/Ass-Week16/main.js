let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Destructuring Array
let [a, b, c] = myFriends;

//Destructuring Object
// {title: ti, age: ag, available: av, skills: [, lasSk]} = a;

//Destructuring Function
function pri({title: ti, age: ag, available: av, skills: [, lasSk]} = myFriends){
    console.log(`Your name is: ${ti}
        Your Age is: ${ag}
        Your last Skills is: ${av === true ? lasSk : "Skills Not Available"}`)
    }
    
// if Condition
chosen === 1 ? pri(a) : chosen === 2 ? pri(b) : chosen === 3 ? pri(c) : "Number Not 1, 2 Or 3";      