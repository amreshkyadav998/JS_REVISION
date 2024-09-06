//IIFE -> Immediately Invoked function expression (can refer mdn for this)

(function add(a,b){
    console.log(a+b);
})(2,3); // calling function immediately


(() => console.log("Hello everyone! How are you")) ();



//practical example

const data = (async () => await fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json)))();

//ATM Design 
const atm = (function (initialBalance) {
    let balance = initialBalance;
    function withdraw(amt) {
        if(amt > balance) {
            console.log("Are you kidding?");
        }else{
            balance-=amt;
            return balance;
        }
    }
    return {withdraw};
});

const amresh = atm(1000);
console.log(amresh.withdraw(100));