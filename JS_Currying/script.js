// function add(a) {
//     return function(b) {
//         return function(c){
//             return a + b + c;
//         };
//     };
// }


// another method
const add = (a) => (b) => (c) => a+b+c;

console.log(add(2)(3)(10));


// function sendAutoEmail(to){
//     return function(subject) {
//         return function (body) {
//             console.log(`Sending Email to ${to}\n with subject ${subject}\n and having body ${body}`)
//         };
//     };
// }


//another method
const sendAutoEmail = (to) => (subject) => (body) => console.log(`Sending Email to ${to}\n with subject ${subject}\n and having body ${body}`);

let step1 = sendAutoEmail("amresh@gmail.com");
let step2 = step1("New Order Confirmation");
step2("Hey Amresh , Here is Something for you");