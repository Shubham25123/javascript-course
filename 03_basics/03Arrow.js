const user = {
    username: "hitesh",
    price: 999,

    welcomemessage: function() {
        console.log(`${this.username}, welcome to website`); // this refer to the current context
        console.log(this);
    }

}

//user.welcomemessage()
//user.username = "sam"
//user.welcomemessage()

console.log(this);

//function chai(){
  //  let username = "hitesh"
    //console.log(this.username);
//}
//chai()

//const chai = function(){
  //  let username = "hitesh"
 //   console.log(this.username);
//}


const chai = () => {  // arrow function
    let username = "hitesh"
    console.log(this);
}

//chai()

//basic syntax of arrow function

//const addtwo = (num1, num2) => {          
    //return num1 + num2
//}

const addtwo = (num1, num2) => ({username:"hitesh"})

console.log(addtwo(3,4));



