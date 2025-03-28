// Ask 1
    console.log("Hello World, I TypeScript");

//Ask 2
    function calculate(numOne: number, numTwo: number) {
        return numOne + numTwo;
    }
    
    console.log(calculate(10, 20)); // 30
    //   console.log(calculate("10", "20")); // We Don't Need This To Work
    console.log(calculate(+true, +true)); // 2

// Ask 3
    function printInfo(valueOne: (string | number), valueTwo: (string | number)) {
        return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
    }
    
    console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
    console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
    // console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// Ask 4
    let arr: (number | boolean[] | (string | (string | number)[])[])[];

    let arr2: any = [1, [true, false], ["string", ["string", 33]], "err"];

// // Ask 5
    function reportErrors(username, age: number) {
        let rank = "Professor";
        return `Username: ${username}`;
        console.log("We Will Not Reach Here");
    }
    // 1) "noImplicitAny": false
    // 2) "noUnusedParameters": true
    // 3) "noUnusedLocals": true
    // 4) "allowUnreachableCode": false
    
    console.log(reportErrors("Elzero", 40));

// Ask 6
    let nothing;
    let theName: string = "Elzero";
    function showMyDetails(a = "", b = "", c) {
    return `${a}${b}${c}`;
    }

    // Replace ???? With The Available Variables As Argument To Get The Result
    console.log(showMyDetails(undefined, undefined, theName)); // Elzero

// Ask 7
    // oldd -> (user: number, age: boolean, country: boolean)
    function showMsg(user?: string, age?: (string | number), country?: string) {
        return `${user}${age}${country}`;
    }
    
    console.log(showMsg());
    console.log(showMsg("Elzero"));
    console.log(showMsg("Elzero", 40));
    console.log(showMsg("Elzero", "40", "Egypt"));

// Ask 8
    // Write The Function Here
        function printInConsole(...num: any) {
            let result = num.forEach((element: any) => {
                    console.log(`The Value Is ${element} And Type Is ${typeof(element)}`);
            });
            return result
        };

    // Using The Function => Do Not Edit
        console.log(printInConsole(1, 2, 3, 4, 5));
        console.log(printInConsole("A", "B", "C"));
        console.log(printInConsole(true, false, false, true, true));

