// for (let step = 0; step < 5; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     console.log("Walking east one step");
//   }


// let x = 1;
// while (x <= 10) {
//   console.log(x);
//   x++; 
// }



  // let i = 0;
  // do {
  //   i += 1;
  //   console.log(i);
  // } while (i < 5);
  

  //for of loop ---> FOR STRINGS AND ARRAYS
  // let str = "Apna College";
  // for(let i of str){
  //   console.log(i);
  // }


  // for in loop --> for objects
//   let Student = {
//     name : "Rahul Kumar",
//     age : 20,
//     cgpa : 7.5,
//     isPass : true,
//   };

// for(let key in Student){
//   console.log("key =",key , " value =",Student[key]);
// }

//STRINGS
// let str = "Apna College";
// console.log(str[8]); //l

//TEMPLATE LITERALS --> the way to have embedded expressions in String.
// let specialStr = `This is a special String`;
// console.log(specialStr); 

// let obj = {
//   item : "pen",
//   price : 10,
// };
// console.log("the price of",obj.item,"is",obj.price); //simpler way
// console.log(`the price of ${obj.item} is ${obj.price}`); //String Interpolation --> to create string by doing substitution of placeholders


// String Methods
// toLowerCase() example
// const sentence = "The Quick Brown Fox Jumps Over The Lazy Dog";
// const lowerCaseSentence = sentence.toLowerCase();
// console.log(lowerCaseSentence);

// Output: "the quick brown fox jumps over the lazy dog"

// toLowerCase() example
// const sentence = "The Quick Brown Fox Jumps Over The Lazy Dog";
// const upperCaseSentence = sentence.toUpperCase();
// console.log(upperCaseSentence);

// Output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"

// trim() example
// const spacesString = "    This string has spaces before and after     ";
// const trimmedString = spacesString.trim();
// console.log(trimmedString);

// Output: "This string has spaces before and after"

//slice() example
// let str = "01234567";
// console.log(str.slice(1,5)); //1234

//concat() example
// let str1 = "Apna";
// let str2 = "College";
// let res = str1.concat(str2);
// console.log(res); //ApnaCollege
// console.log(str1 + str2); //ApnaCollege

//replace() example
// let str = "Hellololo";
// console.log(str.replace("lo","p")); //Helplolo

//replaceAll() example
// let str = "Hellololo";
// console.log(str.replaceAll("lo","p")); //Helppp

//charAt(idx) example
// let str = "ILoveJs";
// console.log(str.charAt(3)); //v
