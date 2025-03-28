"use strict";
// Link Tasks -> https://elzero.org/typescript-assignments-lessons-from-22-to-31/
// Do Not Edit The Code Below
let user = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        return this.username;
    }
};
user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property
// Do Not Edit The Code Below
let client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    }
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
let creature = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
};
///////////////////////////////////////////////////////////
// Ask 4
// Create Class Here
class Player {
    constructor(fn, ty, level, vip) {
        this.fn = fn;
        this.ty = ty;
        this.level = level;
        this.vip = vip;
    }
    details() {
        if (this.vip) {
            return console.log(`VIP ${this.fn}, Type Is ${this.ty} Level Is ${this.level}`);
        }
        else {
            return console.log(`${this.fn}, Type Is ${this.ty} Level Is ${this.level}`);
        }
    }
}
// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
///////////////////////////////////////////////////////////
// Ask 5
class Shorten {
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
}
let tester = new Shorten(100, "Task 5", "Developer");
console.log(tester.id);
console.log(tester.username);
///////////////////////////////////////////////////////////
// Ask 6 
class Show {
    constructor(_title) {
        this._title = _title;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
}
let testers = new Show("Elzero");
console.log(testers.title); // Property 'title' does not exist on type 'Show'
testers.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(testers.title); // Property 'title' does not exist on type 'Show'
// Create Your Class Here
class Players {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn() { return console.log("Logged In"); }
    logOut(msg) { return console.log(msg); }
}
let playeri = new Players(100, "Elzero", 95);
console.log(playeri.id); // 100
console.log(playeri.title); // "Elzero"
console.log(playeri.level); // 95
playeri.logIn(); // Logged In
playeri.logOut("Good Bye"); // Logged Out, Good Bye
