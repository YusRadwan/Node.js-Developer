console.log("Week 8");
// function ShowDetails(a, b, c) {
//     const param = [a, b, c];
//     const name = param.find((item) => typeof item === "string");
//     const age = param.find((item) => typeof item === "number");
//     const status = param.find((item) => typeof item === "boolean");
//     // return document.write(`<div>  </div>`);
//     console.log(`Hello ${name}, Your Age is ${age},You are ${status ? "Available" : "Not Available"} for hire`)
// }

// ShowDetails(38, "Ahmed", false);

function ShowDetails(...arg) {
    let param = [...arg];
    for (let i = 0; i < param.length; i++){
        if (typeof param[i] === "string"){
            var name = param[i];
        } else if (typeof param[i] === "number") {
            var age = param[i];
        } else if (typeof param[i] === "boolean") {
            var status = param[i];
        } else {
            console.log(`The ${param[i]} is not a String, number or boolean`);
        }
    }
    return document.write(`<div>Hello ${name}, Your Age is ${age}, You are ${status ? "Available" : "Not Available"} for hire</div>`);
}

ShowDetails(38, "Ahmed", false, undefined);
ShowDetails(true, "yusuf", 26);