//arithmetic operator

let a = 2;
let b = 5;

a = a +10;
a += 10;
console.log("Output of a is : ",a);

a = a-2;
a -= 2;
console.log("New Output of a is : ",a);


console.log("New Output of a*b is : " ,a*b);
console.log("New Output of a**b is : " ,a**b);

console.log('5' == 5);
console.log('5' === 5)


//Ternary operator
let age = 5;
let status1 = (age > 18) ? 'I can vote' : 'I cannot Vote';
console.log(status1);


//If-else
let number = 5;
if(number == 1) {
        console.log('A');
    }
    else if(number == 2) {
        console.log('B');
    }
    else if(number == 3) {
        console.log('C');
    }
    else if(number == 4) {
       console.log('D');
    }
    else {
        console.log('F');
}


//Switch case
let num = 3;

switch(num) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    case 4: console.log('D');
    break;
    default: console.log('F');
}