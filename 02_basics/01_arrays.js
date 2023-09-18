//array

const myArr = [0, 1, 2, 3, 4];
const fruits = [ 'banana', 'Apple', 'guava', 'Mango' ];

myArr.push(5);
// console.log(myArr);
// push function insert the value in last 
//pop function removes last element
//peek function 


let a = myArr.concat(fruits);

// console.log(a.includes('Apple'));
// console.log(a.indexOf('banana'));

const newArr = myArr.join();

// console.log(newArr);

const myn1 = myArr.slice(0,3); 

console.log(myn1);
console.log("a", myArr);

const myn2 = myArr.splice(1,3); 

console.log(myn2);
console.log("a", myArr);


// here the slice() shows the data first to last-1 and 
// all the values in the array are as it is 

//in splice() shows the data all of the given index but it 
//cut the value from array and that value substracted from the array