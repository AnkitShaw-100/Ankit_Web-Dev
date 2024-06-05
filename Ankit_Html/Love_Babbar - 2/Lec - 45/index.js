//1
var greet;
console.log(greet)

var greet = function(){
    console.log("Namaste User ");
}


//2
let obj = {
    age : 25,
    wt : 36,
    ht : 180,
    greet: () =>{
        console.log("Namaste Chua")
    }
}

console.log(obj.age);
obj.greet();


//3
const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
];
let first  = arr[2];
let ans = first(5,10);
console.log(ans);


//4
function solve(number){
    return function(number){
        return number * number;
    }
}
let ans1 = solve(5);
let finalAns = ans1(10);
console.log(finalAns);


//5

function greetMe(greet, fullname){
    console.log("Hello", fullname );
    greet();
}

function greet(){
    console.log("Greetings for the day")
}

greetMe(greet,"Babbar");
greet();


//<------            6            ------>
// const object1 = new human();
// class human{
    
// }
// sayHello();
// let sayHello = function() {
//     console.log("Hello Jee, kaise ho saare");
// }


// console.log(age2);
// const age2 = 25;

// console.log(age);
// var age = 25;
// sayMyName("Babbar");

// function sayMyName(finalName) {
//     console.log(finalName);
// }

