// # Primitive
// 7 Types-- String, Number, Boolean, Null, Undefined, Symbol,Bigint


const score = 100
const scorevalue = 100.3

const isLoggedIn= false
const outsideTemp= null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);
const bigNumber = 14343225345436465645466n

// REFERENCE- (NON primitive)
// array, Objects, functions

const heros = ["shaktiman", "nagaraj","doga"]//array

let myObj = {
    name:"shubham",
    age:22,
}//object

// function defination --function(){}
const myFunction = function(){
    //console.log("hello world");
}

//console.log(typeof bigNumber);



// JavaScript is a dynamically typed language, 
//which means that data types of variables are determined by the value they 
//hold at runtime and can change throughout the program as 
//we assign different values to  


// memory - Stack (primitive), heap (Non-Primitive)

let myYoutubename = "shubham"
let anothername = myYoutubename
anothername = "chaiaurcodde"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email= "shubham@google.com"
console.log(userOne.email);
console.log(userTwo.email); 


