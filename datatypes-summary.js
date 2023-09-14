//Two types of datatypes 1.Primitive ,2.Non-Primitive.
//#1.Primitive data Types are
//1.String, 2.Symbol, 3.Big-int, 4.Boolean, 5.null, 6.Number, 7.Undefined.

const score = 100;
const name = "guru";
let isLoggedIn = true;
let y = null;

//#2.Non-primitive data Types are
//1.Arrays, 2.Object, 3.Functions

const fruits = ['banana','apple','orange','pineapple'];

let car = {
    wheels: 4,
    doors: 4,
    headlight: 2,
    owner: 'shyam'
}
let my_function = function(){
    console.log('helloWOrld');
}
my_function();

console.log(typeof fruits);
console.log(typeof car);
console.log(typeof my_function);


//------------------------------------
/* Stack (Primitive) ,Heap (Non-Primitive) */

let myName =`Gurunand Mourya`; 

let anotherName = myName;
anotherName = 'guru';

console.log(anotherName);
console.log(myName);


let userOne = {
    email: 'guru@gmail.com',
    upi: 'guru@ybl'
}

let userTwo = userOne



console.log(userTwo);
console.log(userOne);

//in stack we get a copy of data but in Heap we get reference of real data.