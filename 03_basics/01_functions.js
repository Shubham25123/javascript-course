function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
}

//sayMyName()

//function addTwoNumbers(number1, number2){ //parameters
  //  console.log((number1+number2));
//}

//addTwoNumbers(3, 4)  //argument
//addTwoNumbers(3, "4")

function addTwoNumbers(number1, number2){ //parameters
    //let result = number1+ number2
    //return result
    return number1 + number2   
}

const result = addTwoNumbers(3, 5)
//console.log("result: ", result);



function loginuser(username = "sam"){
    if(username === undefined){ //!username
        console.log("please enter a valid username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginuser("shubham"));
//console.log(loginuser("shubham"))


function calculateCartPrice(val1, val2, ...num1){                      //...-rest operator, spread operator
    return num1
}
console.log(calculateCartPrice(200, 400,600,40000));
const user = {
    username: "shubham",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and  price is ${anyobject.price}`);
}

handleObject(user) 

//const myNewarray = [200,4,6,8]

function return2value(getarray){
    return getarray[1]
}

//console.log(return2value(myNewarray));
console.log(return2value([200,4,6,8]));