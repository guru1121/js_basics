let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString('en-IN'));
console.log(typeof myDate);

setInterval(function () {
    let date = new Date();
    date = date.toLocaleTimeString('en-IN'); 
   
    console.log(date);

  }, 1000);

  