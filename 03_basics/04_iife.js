// Immeditely Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTEDD`);
})();

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})(`shubham`)