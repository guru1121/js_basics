const accountId = 14452;
let accountEmail = "guru@gmail.com";
var accountPassword = " 54321";
accountcity = 'jaipur';
let accountState;

// accountId =2;

accountEmail = "guru123@gmail.com";
accountPassword = "12345";
accountcity = "bangluru";
console.log(accountId);

console.table([accountId, accountEmail, accountPassword,accountcity, accountState]);

/*
var is not block scope so it can create some errors in code so prefer not to use it.
let is block scope variable it is used where the possibility of value of variable changed.
const is used where the value of variable is constant.
*/