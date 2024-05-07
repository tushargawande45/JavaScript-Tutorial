// function myFunction() {
//     console.log("Welcome to Apna College!");
//     console.log("We are Learning JS");
// }

// myFunction();

//FUNCTION --> 2 numbers , sum
// function sum(n1,n2){
//     console.log(n1+n2);
// }
// sum(5,10); //15

//RETURN
// function sum(n1,n2){
//     sum = n1 + n2;
//     return sum;
// }
// let val = sum(5,10);
// console.log(val); //15

//ARROW FUNCTIONS --> Compact Way of Writing Functions
// const funcName = (param1,param2,...) => {
//     //Do some work
// }

// const arrowSum = (n1,n2) => {
//     console.log(n1+n2);
// };
// arrowSum(2,3); //5

// function mul(a,b){
//     return a*b;
// }
// let result = mul(2,3);
// console.log(result);

// const arrowMul = (a,b) =>{
//     return a*b;
// };
// let result = arrowMul(2,3);
// console.log(result); //6


// Q1) CREATE A FUNCTION USING THE "FUNCTION" KEYWORD THAT TAKES A STRING AS AN ARGUMENT AND RETURNS THE NUMBER OF VOWELS ON THE STRING

// function vowelsCount(str){
//     let count = 0;
//     let str1 = str.toLowerCase();
//     for (const char of str1) {
//         if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
//             count++
//         }
//     }
//     console.log(count); //9
// }
// vowelsCount("Hello Tushar, How Are You?"); 


// Q2) CREATE AN ARROW FUNCTION TO PERFORM THE SAME TASK
// const vowelsCount = (str) =>{
//     let count = 0;
//     let str1 = str.toLowerCase();
//     for (const char of str1) {
//         if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
//             count++
//         }
//     }
//     console.log(count); //9
// }
// vowelsCount("Hello Tushar, How Are You?"); 

//METHODS : function which return with some data types called as methods
//forEach --> it is used when we need to go through or process through each and every array element
// callback function --> here , it is the function to execute for each Element in the array 
// *A callback is a function passed as an argument to another function.

// let arr = ["Pune","Delhi","Mumbai"];
// arr.forEach((val) => {
//     console.log(val)
// });
// O/P: Pune
// Delhi
// Mumbai

// let arr = ["Pune","Delhi","Mumbai"];
// arr.forEach((val,idx)=> {
//     console.log(val.toUpperCase(), idx);
// });
// O/P: PUNE 0
// DELHI 1
// MUMBAI 2

// let arr = ["Pune","Delhi","Mumbai"];
// arr.forEach((val,idx,arr)=> {
//     console.log(val.toUpperCase(), idx, arr);
// });
// o/p:
// PUNE 0 [ 'Pune', 'Delhi', 'Mumbai' ]
// DELHI 1 [ 'Pune', 'Delhi', 'Mumbai' ]
// MUMBAI 2 [ 'Pune', 'Delhi', 'Mumbai' ]

// PRACTICE Q1) FOR A GIVEN ARRAY OF NUMBERS , PRINT THE SQUARE OF EACH VALUE USING THE forEach LOOP
// let arr = [1,2,3,4,5,6];
// arr.forEach((sqr)=>{
//     console.log(sqr*sqr);
// });
// o/p : 
// 1
// 4
// 9
// 16
// 25
// 36

//SOME MORE ARRAY METHODS:
//MAP: creates a array with results of some operations. The value its callback returns are used to form new array.
// let nums = [34,65,24,17];
// nums.map((val)=>{
//     console.log(val);
// });
// o/p:
// 34
// 65
// 24
// 17

// let nums = [34,65,24,17];
// let newArray = nums.map((val)=>{
//     return val*2;
// });
// console.log(newArray);
// //o/p: [ 68, 130, 48, 34 ]



//FILTER: Creates a new Array of elements that give true for a condition/Filter.E.g. all even elements
// let nums = [23,42,14,97,28,56,41];
// let evenArray = nums.filter(val=>{
//     return val%2==0;
// });
// console.log(evenArray);
// o/p: [ 42, 14, 28, 56 ]



// REDUCE: Perform some operations and reduce the array to a single value. It returns that single value.

// let arr = [1,2,3,4,5,6,7];
// let sum = arr.reduce((result,current)=>{
//     return result + current;
// });
// console.log(sum); //28

// let arr = [5,6,2,1,6];
// const maxElement = arr.reduce((max,current)=>{
//     return max > current? max : current;
// });

// console.log(maxElement); //6

// Q) WE ARE GIVEN ARRAY OF MARKS OF STUDENTS . FILTER OUT THE MARKS OF STUDENTS THAT SCORE 90+.
// let marks = [72,91,87,96,99,88,68];
// let toppers= marks.filter(val=>{
//     return val>90;
// });
// console.log(toppers); // [ 91, 96, 99 ]

// Q)TAKE A NUMBER N AS INPUT FRO USER. CREATE AN ARRAY OF NUMBERS FROM 1 TO N.
// USE THE REDUCE METHOD TO CALCULATE THE SUM OF ALL NUMBERS IN THE ARRAY.
// USE THE REDUCE METHODS TO CALCULATE THE PRODUCT OF ALL NUMBERS IN THE ARRAY. 

let n = 5;
let array = [];
for(let i=1;i<=n;i++){
    array.push(i);
}
let sum = array.reduce((result,current)=>{
    return result + current
});

let mul = array.reduce((result,current)=>{
    return result * current;
});

console.log(sum); //15
console.log(mul); //120

