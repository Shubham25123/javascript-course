const accountId = 145566
let accountEmail = "shubham@google.com"
var accountPassword = "1234"
accountCity = "jaipur"
let accountState;
//accountId = 2 // not allowed
accountEmail = "shub@google"
accountPassword = "24577"
accountcity = "patna"
console.log(accountId);
/*
prefer not to us var because of issue in block scope and functional scope*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])