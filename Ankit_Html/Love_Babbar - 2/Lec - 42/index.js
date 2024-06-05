//1
for(let i=0; i<= 10; i++){
    console.log("Ankit");
}


//2
let i = 1;
do {
    console.log("Ankit");
    i++;
}while(i<=10);

//3
//let k = 1;
//while(k <= 10){
//    console.log("Ankit");
//}

//4
for(let i =1; i<6; i++) {
     console.log(i);
}

//5
for(let i=1; i<=6; i++) {
     if(i == 4) {
         break;
     }
     else {
         console.log(i);
    }
}


//6
for(let i = 1; i<=4; i++) {
    if(i == 3) 
         continue;
    else   
         console.log(i);
}


//7
let l = 1;
while(l < 5) {
     console.log("Inside the loop");
     if(l==3){
         l++;
         continue;
     }

     else
         console.log(i);
     l++;
}

//8
let firstName = "Ankit";
let lastName = 'Shaw';
let name = "Ankit"; 
console.log(name);


//9
//let firstName = new String("Love babbar");
console.log(firstName);
let op1 = 'English ';
let op2 = 'HINDI ';

console.log(op2.length);
let finalAns = `${op1}${op2}`;
console.log(finalAns)

let ans = op1 + op2;
console.log(ans);

console.log(op1.toUpperCase());
console.log(op2.toLowerCase());

let str = "Babbar";
console.log(str.substring(2,4));


let sentence = "Hello \\Jee \\Kaise\\ \\ho \\saare";
let words = sentence.split('\\');

console.log(words);
console.log(words.join('-'));



