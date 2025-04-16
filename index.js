// let varcontainingFunction = function () {
//     let varInFunction = "I'm in a function";
//     console.log("hi there!", varInFunction);
// }
// varcontainingFunction();
// function parameter(args1, args2) {
//     return args1 + " " + args2;
// }
// const args1 = "hello";
// const args2 = "javascript";
// console.log(parameter(args1, args2));

// function addTwoNumbers(x, y) {
//     console.log(x + y);
// }
// const x = 10;
// const y = 20;
// addTwoNumbers(x, y);

// function addTwoNumbers(){
//     let ip=prompt("enter the number")
//     let ou=prompt("enter the number")
//     return parseInt(ip)+parseInt(ou)
// }
// console.log(addTwoNumbers());
// function addTwoNumbers(x = 3, y = 7) {
//     console.log(x + y);
// }
// addTwoNumbers(5, 6, 8, 3);

// hello = () => {
//     return "Hello World!";
//   } 
//   console.log(hello());

// let addTwoNumbers = (x, y) => {
//     return(x + y);
// }


//   const arr = ["apple", "banana", "cherry"];
//   const arr2 = ["elephant", ...arr, "monkey"]
//   console.log(arr2);

//   const arr3 = ["elephant",arr, "monkey"]
//   console.log(arr3);
// function addTwoNumbers(x, y, z, a) {
//     console.log(x + y + z + a);
// }
// let arr1 = [5, 6];
// let arr2 = [5, 6];
// addTwoNumbers(...arr1, ...arr2);
// function someFunction(par1,...par2) {
//     console.log(par1,...par2);
// }
// someFunction("hi", "how", "are you");
// let addTwoNumbers = (x, y)=>{
//     console.log(x + y);

// }
// addTwoNumbers(5, 6)
// let resultsArr = [];
// for (let i = 0; i <= 10; i++) {
//     result = addTwoNumbers(i, 2 * i);
//     resultsArr.push(result);
// }
// console.log(resultsArr);

// variable scope in function
// testAvailability = (x) => {
//     console.log("availabel here", x);

// }
// testAvailability("hi");
// console.log("not avialable hre", x);

// function testAvailability() {
//     let y = "local variable";
//     console.log("avialable", y);
//     return y;
// }
// let z = testAvailability();
// console.log("outside the function", z);
// console.log("not avialable hre", y);
// function doingStuff() {
//     if (true) {
//         var x = "local";

//     }
//     console.log(x);
// }
// doingStuff()

// function doingStuff() {
//     if (true) {
//         const x = "local";

//     }
//     console.log(x);
// }
// doingStuff()

// let globalScope = "Accessible everywhere";
// console.log("outsidefunction functioj ", globalScope);
// function createingScope(x) {
//     console.log("acess to global var", globalScope);

// }
// createingScope("gvfbgvfbvjv")
// console.log("jciudbchjvchdb", x)


// let x = "global";
// function doingStuff() {
//     let x = "local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);

// function doingStuff() {
//     x = "local";
//     console.log("hdxvhxbjxnlk", x);
// }
// doingStuff();
// console.log("hfuegf", x);


// (() => {
//     console.log("IIFE with arraw function");
// })();

//RECURSIVE FUNCTION
// function factorial(n) {
//     if (n === 0) return 1; // Base case
//     return n * factorial(n - 1); // Recursive call
// }
// console.log(factorial(15));

// function getRecursive(n) {
//     console.log(n)
//     if (n == 0) return 1;
//     getRecursive(--n); // Recursive call
// }
// getRecursive(3);

// function logRecursive(n) {
//     console.log("started function", n);
//     if (n > 0) {
//         logRecursive(n - 1);
//     }
//     else {
//         console.log("done with recursive");
//     }
//     console.log("ended function", n);
// }
// logRecursive(3);

// function getrecursive(nr){
//     console.log(nr);
//     if(nr>0){
//         getrecursive(--nr);
//     }
// }
// getrecursive(3);

// performance of recursion is slower than the iteration 

// // Nested function

// function doouterfunctionstuff(nr) {
//     console.log("outer function");
//     doinnerfunctionStuff(nr);
//     function doinnerfunctionStuff(x) {
//         console.log(x + 7);
//         console.log("I can acess outer variable", nr);
//     }

// }
// doouterfunctionstuff(2);

// # anonymous function

// function callbacks

// let functionvariabl = function () {
//     console.log("not so secret through");
// }

// function doFlexiblestuff(executeStuff) {
//     executeStuff();
//     console.log("inside doflexiblestuff");

// }
// doFlexiblestuff(functionvariabl);

// let youGotThis = function () {
//     console.log("you're doing realli well, keep coding");

// }
// setTimeout(youGotThis, 5000);

// let youGotThis = function () {
//     console.log("you're doing really well, keep coding");

// }
// setInterval(youGotThis, 1000);

// let testfunction=function(){
//     console.log("hello")
// }()





