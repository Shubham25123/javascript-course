//singleton-- jab bhi hum literals se object banaye ge toh singleton nhi bane ga
// aur constructor sse banane pe singleton hi bne ga --Object.create

//object literals

 const mySym = Symbol("key1")

 const JsUser ={
    name: "Shubham",
    "full name": "Shubham Sharma",
    age: 18,
    [mySym]: "myKey1",
    location: "patna",
    email: "shubham@google",
    isLoggedIn: false,
    LastLoginDays: ["monday","sunday"]

}
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email = "shubham@chatgpt"
//Object.freeze(JsUser)
JsUser.email = "shubham@micro"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());