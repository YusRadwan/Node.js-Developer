// Link Task -> https://elzero.org/typescript-assignments-lessons-from-32-to-38/

// Ask 1
    // Do Not Edit
        type numandstring = number | string;

        abstract class Game {
            constructor(public title: string, public price: numandstring) {}
            abstract getLocation() : string;
            abstract getDiscount() : string;
        }

    // Start Edit And Fix
        class RPG extends Game {
            constructor(title: string, public price: numandstring, public rate: number) {
                super(title, price);
            }
            getLocation(): string {
                return `Location`;
            }
            getDiscount(): string {
                return `Discount`;
            }
        }

        class Action extends Game {
            constructor(title: string, public price: numandstring, public rate: number, public company: string) {
                super(title, price);
            }
            getLocation(): string {
                return `Location`;
            }
            getDiscount(): string {
                return `Discount`;
            }
        }
    // End Edit And Fix

    // Do Not Edit
        let gameOne = new RPG("Ys", 100, 10);
        let gameTwo = new Action("Uncharted", 90, 15, "Sony");

        console.log(gameOne.title); // "Ys"
        console.log(gameOne.price); // 100
        console.log(gameOne.rate); // 10
        console.log(gameOne.getDiscount()); // "Discount"
        console.log(gameOne.getLocation()); // "Location"

        console.log(gameTwo.title); // "Uncharted"
        console.log(gameTwo.price); // 90
        console.log(gameTwo.rate); // 15
        console.log(gameTwo.company); // "Sony"
        console.log(gameTwo.getDiscount()); // "Discount"
        console.log(gameTwo.getLocation()); // "Location"

////////////////////////////////////////////////////////////

// Ask 2
    // Write Function Code Here
        function showTypes<T = string, S = string, G = string>(val?: T, val2?: S, val3?: G): string {
            const defaultVal = "Nothing";
            const vala = val !== undefined ? val : defaultVal;
            const valb = val2 !== undefined ? val2 : defaultVal;
            const valc = val3 !== undefined ? val3 : defaultVal;
            return `${vala} - ${valb} - ${valc}`;
        }
    // Do Not Edit Here
        console.log(showTypes()); // Nothing - Nothing - Nothing
        console.log(showTypes<string>("String")); // String - Nothing - Nothing
        console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
        console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

////////////////////////////////////////////////////////////

// Ask 3
    // Write Class Code Here
        class Games<SS> {
            constructor (public title: SS, public price: number) {
                Number(title) ? console.log(`There's A Game Called "${title}"`) : ``;
            }
            getDiscount (val: SS): void {
                console.log(`The Discount Is ${val}`);
            }
        }
    // Do Not Edit Here
        let gameOnee = new Games<string>("Ys", 100);
        let gameTwoo = new Games<number>(2064, 100); // There's A Game Called "2064"

        console.log(gameOnee.title); // "Ys"
        console.log(gameOnee.price); // 100
        gameOnee.getDiscount("50"); // "The Discount Is 50"

        console.log(gameTwoo.title); // 2064
        console.log(gameTwoo.price); // 100
        gameTwoo.getDiscount(80); // "The Discount Is 80"