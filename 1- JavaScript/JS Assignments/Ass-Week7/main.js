let myAdmin = ["Ahmed", "Osama", "Sayed", "Stop", "lamera"];
let myEmployess = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Samia", "Amany", "Amir"];

document.write(`<div>We have ${myAdmin.length} Admins</div>`);
document.write(`<hr>`);
for (let i = 0; i < myAdmin.length; i++) {
    if (myAdmin[i] === "Stop") break;
    document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmin[i]}`);
    document.write(`<h3>Team Members:</h3>`);
    for (let j = 0; j < myEmployess.length; j++) {
        if (myEmployess[j][0] === myAdmin[i][0]) {
            document.write(`<ul>`);
                document.write(`<ol>`);
                    document.write(`<li> ${myEmployess[j]} </li>`);
                document.write(`</ol>`);
            document.write(`</ul>`);
        }
    }
    document.write(`<hr>`);
    document.write(`</div>`);
}