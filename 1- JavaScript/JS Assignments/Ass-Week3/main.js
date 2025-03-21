// ++a => Plus 1 and Print
// a++ => plus 1 on a and not print
// +b  => define b is number positive

    
    // First Assignments
    let a = 10;
    let b = "20";
    let c = 80;

    console.log(++a + +b++ + +c++ - +a++); // 100 Note (a = 12, b = 21, c = 81)
    console.log(++a + -b + +c++ - -a++ + +a); // 100 Note (a = 14, b = 21, c = 82)
    console.log(--c + +b + --a * +b++ - +b * a + --a - +true);// 100 (a = 12, b = 22, c = 81)

    ///////////////////////////////////////////
    // Second Assignments
    let d = "-100";
    let e = "20";
    let f = 30;
    let g = true;

    //only use variables value
    //Do not use variable twice

    console.log(-d * +e)// 2000
    console.log(-d + ++e + ++f + true * +e)//173

    ///////////////////////////////////////////
    // Replace ? With Arithmetic Operators
    console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

    ///////////////////////////////////////////
    let num = 3;

    // Solution One
    console.log(num+= num); // 6

    // Solution Two
    console.log(num + false); // 6

    // Soultion Three
    console.log(++num - true); // 6

    // Soultion Four
    console.log(num - true); // 6

    // Solution Five
    console.log(num-= true); // 6

    // Solution Six
    console.log(+num); // 6

    ///////////////////////////////////////
    let num1 = "10";

    // Solution One
    console.log(+num1 + +num1); // 20

    // Solution Two
    console.log(+num1 + +num1 - false); // 20

    // Solution Three
    console.log(num1++ + +num1 - true); // 20

    // Solution Four
    console.log(+num1 - true + +num1 - true); // 20

    ///////////////////////////////////////

    let points = 10;

    // Write Your Code Here

    console.log(++points + true + true); // 13

    // Write Your Code Here

    console.log(points); // 8;