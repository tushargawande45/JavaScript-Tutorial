// let studMarks = [76,83,56,91,94,79];
// console.log(studMarks);  //[ 76, 83, 56, 91, 94, 79 ]

// for(let i of studMarks){
//     console.log(i);
// }
// output --> 76
// 83
// 56
// 91
// 94
// 79

//Array Methods--> Push(),Pop(),toString()
// let foodItems = ["Potato","Apple","Litchi","Tomato","Chips"];
// console.log(foodItems);
// foodItems.push("Jalebi","Burger","Paneer");
// console.log(foodItems);

// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("Deleted ",deletedItem);

// console.log(foodItems.toString());

// let marvelHeroes = ["Thor","Spiderman","Ironman"];
// let dcHeroes = ["Superman","Batman"];

// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// marvelHeroes.unshift("Antman"); //element enters at the start of the array
// console.log(marvelHeroes); //[ 'Antman', 'Thor', 'Spiderman', 'Ironman' ]

// let deletedHero = marvelHeroes.shift(); //Removes the first element from an array and returns it
// console.log(marvelHeroes); 
// console.log("Deleted ",deletedHero); //[ 'Thor', 'Spiderman', 'Ironman' ]

// let marvelHeroes = [ "Thor", "Spiderman", "Ironman", "Antman", "Dr.Strange" ]
// console.log(marvelHeroes);  //[ 'Thor', 'Spiderman', 'Ironman', 'Antman', 'Dr.Strange' ]
// console.log(marvelHeroes.slice(0,3)); //[ 'Thor', 'Spiderman', 'Ironman' ] --> Returns piece of Array
// console.log(marvelHeroes.slice(3)); //[ 'Antman', 'Dr.Strange' ] 

// splice(startIdx,delCount,newEl1...) --> change original Array(add,replace,remove)
// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
// console.log(arr); //[1,2,101,102,5,6,7]

//Add Element
// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,0,101);
// console.log(arr); //[1,2,101,3,4,5,6,7]

//Delete Element
// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,1);
// console.log(arr); //[ 1, 2, 4, 5, 6, 7 ]

//Replace Element
// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,1,101);
// console.log(arr); //[ 1, 2, 101, 4, 5, 6, 7 ]