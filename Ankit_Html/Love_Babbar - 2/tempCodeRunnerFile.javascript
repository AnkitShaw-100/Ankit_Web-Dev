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

let evenArray = arr1.filter(number)  {
    return (number % 2) === 0;
    if(number%2 === 0) {
        return true;
    }
    else {
    return false;
    }
};


