//1
function sayMyName() {
        console.log("Ankit Shaw");
}
sayMyName();


//2
function printCounting(){
for(let i = 1; i <= 10; i++){
        console.log(i);
}
}
printCounting();

//3
function printNumber(num){
        console.log("Printiing Number : " ,num)
}
printNumber(5);

//4
function getAverage(num1, num2){
         let avg = (num1+num2)/2;
         console.log("Average : ", avg);
}
getAverage(10,30);


//5
//Using return function
function getsum(a,b,c){
        let sum = a+b+c;
        return sum;
}
let ans = getsum(5,10,15);
console.log("Printing sum : " ,ans);

//6 Full name
function getmyname(firstName, lastName){
        let fullName = firstName + " " + lastName;
        return fullName;
}
let fullName = getmyname("Ankit",1000);
console.log("Full name : ", fullName);

//7
getMultiplication = function (a,b) {
        return a*b;
}
let answer = getMultiplication(2,20);
console.log("Product is : ",answer);


//8
//Square of a number
let squareNumber = function(num) {
     let ans = num**2;
     return ans;
 }

let answer2 = squareNumber(5);
console.log("Square of 5 is : ",answer2);

//9

// let getExp = (x,y) {
//         let ans = x**y;
//         return ans;
// }
    
// console.log("X**Y is : ",getExp(2,10));