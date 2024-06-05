//1
let obj = {
    name : "Ankit",
    age : 20,
    weight : 75,
    height : "5ft 7in",
    greet : function(){
        console.log("Hello ji kaise hai ? ");
    }
};

for(let key in obj){
    console.log(key, " ", obj[key]);
}

console.log(obj)
obj.greet()

console.log(typeof(obj))

//2
// // let obj2 = obj;
let arr = [1,2,3,4,5];
let brr = new Array('Ankit',100,true);
brr.push('Shaw');
brr.pop();

brr.shift();
brr.unshift('Ankit Shaw');
brr.push(20);
brr.push(40);

for (const element of brr) {
    console.log(element);
}

brr.push(70);
brr.splice(1,0,'kunal');
console.log(brr);
console.log(typeof(brr));



let arr1 = [10,20,30,11,21,44,51];

let evenArray = arr1.filter((number) =>  {
    return (number % 2) === 0;
    if(number%2 === 0) {
        return true;
    }
    else {
    return false;
    }
});


//3
let ansArray = arr.map((number) => {
    return number*number;
})
console.log(ansArray)


let arr3 = [1,2,'Ankit',"Love","Babbar",null];
let ans = arr3.filter((value) =>{
    if(typeof(value) == 'number'){
        return true;
    }
    else{
        return false;
    }
});

console.log(ans);


//4
let fullName = "babbar";
for(let val of fullName) {
    console.log(val);
}

//5

let arr4 = [10,20,30,40];
for(let value of arr4) {
    console.log(value);
}

//5
let arr5 = [10,20,30,40,50];

let getSum = (arr5) => {
    let sum = 0;
    arr5.forEach((value) => {
        sum = sum + value;
    })
    return sum;
}

let totalSum = getSum(arr5);
console.log(totalSum);
