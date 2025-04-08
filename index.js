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

let addTwoNumbers = (x, y) => {
    return(x + y);
}


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
let resultsArr = [];
for (let i = 0; i <= 10; i++) {
    result = addTwoNumbers(i, 2 * i);
    resultsArr.push(result);
}
console.log(resultsArr);


