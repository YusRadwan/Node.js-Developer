// Link Tasks -> https://elzero.org/typescript-assignments-lessons-from-22-to-31/

// Ask 1
    // Edit The Interface To Fix The Problems
    interface Member {
        id: number | string;
        username: string;
        country?: string;
        state: boolean;
        getName() : string;

    }
    
    // Do Not Edit The Code Below
    let user: Member = { // Property 'country' is missing in type
        id: 100,
        username: "Elzero",
        state: true,
        getName() { // 'getName' does not exist in type 'Member'
        return this.username;
        }
    }
    
    user.id = 200;
    user.id = "200"; // Type 'string' is not assignable to type 'number'
    user.state = false; // Cannot assign to 'state' because it is a read-only property
    
///////////////////////////////////////////////////////////

// Ask 2
    // Create Interface Here
        interface Client {
            id: number,
            username: string,
            active: Boolean,
            discount: number,
            getPrice(p: number): number
        }

    // Do Not Edit The Code Below
        let client: Client = {
            id: 100,
            username: "Elzero",
            active: true,
            discount: 10,
            getPrice(price: number) {
            return price - this.discount;
            }
        }
    
    console.log(`Client Id Is ${client.id}`);
    console.log(`Client Name Is ${client.username}`);
    console.log(`Client Has Dicount ${client.discount}`);
    console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

///////////////////////////////////////////////////////////

// Ask 3
    // Do Not Edit The Code Below
        interface Man {
            title: string;
            weight: number;
            age: number;
        }
        
        interface Bird {
            canFly: boolean;
        }

        // Write Code Here
            interface Superman extends Man, Bird {
                bodyType: string,
                origin: string
            }
        
        let creature: Superman = {
            title: "Superman",
            weight: 100,
            age: 500,
            canFly: true,
            bodyType: "Iron",
            origin: "Krypton"
        }

///////////////////////////////////////////////////////////

// Ask 4
    // Create Class Here
        class Player {
            constructor (public fn: string, public ty: string, public level: number | string, public vip?: Boolean) {}
            details(): void {
                if (this.vip) {
                    return console.log(`VIP ${this.fn}, Type Is ${this.ty} Level Is ${this.level}`);
                } else {
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
        constructor (
            public id: number, 
            public username: string, 
            protected title: string
        ) {}
    }
    
    let tester = new Shorten(100, "Task 5", "Developer");
    
    console.log(tester.id);
    console.log(tester.username);

///////////////////////////////////////////////////////////

// Ask 6 
    class Show {
        constructor (private _title: string) {}
        
        public get title(): string {
            return this._title;
        }
        
        public set title(value: string) {
            this._title = value;
        }
        
        
    }
    
    let testers = new Show("Elzero");
    
    console.log(testers.title); // Property 'title' does not exist on type 'Show'
    testers.title = "Osama"; // Property 'title' does not exist on type 'Show'
    console.log(testers.title); // Property 'title' does not exist on type 'Show'

///////////////////////////////////////////////////////////

// Ask 7
    interface Play {
        id: number;
        title: string;
        level: number | string;
        logIn(): void;
        logOut(msg: string): void;
    }
    
    // Create Your Class Here
    class Players implements Play {
        constructor(
            public id: number,
            public title: string,
            public level: number
        ) {}
        logIn (): void {return console.log("Logged In")}
        logOut (msg: string): void {return console.log(msg);}
    }
    
    let playeri = new Players(100, "Elzero", 95);
    
    console.log(playeri.id); // 100
    console.log(playeri.title); // "Elzero"
    console.log(playeri.level); // 95
    playeri.logIn(); // Logged In
    playeri.logOut("Good Bye"); // Logged Out, Good Bye

///////////////////////////////////////////////////////////
