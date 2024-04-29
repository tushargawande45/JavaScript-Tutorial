// console.log("Hello world");
// console.log("My Name is Tushar");
// console.log("I'm a Software Engineer");

// fullName = "Tony Stark";
// age = 24;
// price = 99.99;
// radius = 14;
// x = null;
// y = undefined;
// isFollow = false;
// console.log(isFollow);

/*var,let and const
var -> variable can be re-declared and updated. A global scope variable.
let -> varibale cannot be re-declared but can be updated. A block scope Variable.
const -> Variable cannot be re-declared or updated. A block scope variable.
*/

const Student = {
    fullName : "Tushar Gawande",
    age : 22,
    cgpa : 8.7,
    isPass : true,
};
console.log(Student)
console.log(typeof Student)
console.log(Student["age"])
console.log(Student.age)

Student.age = Student.age + 1;
console.log(Student.age)