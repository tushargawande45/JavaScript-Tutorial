// alert("Hello");
// console.dir(window);
// console.log("Hello");

//DOM MANIPULATIONS
//1)Selecting with Id             #id-> unique
// let heading = document.getElementById("heading");
// console.dir(heading);

//2)Selecting with class          .class -->same for few elements  --> returns collection which is similar to arrays
// let heading = document.getElementsByClassName("myClass");
// console.dir(heading);

// 3)Selecting with tag
// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);


//QUERY SELECTORS
/* document.querySelector("myId/myClass/tag"); //returns first element */
// let firstEl = document.querySelector("p");  
// console.dir(firstEl); 

// let firstEl = document.querySelector(".myClass");  
// console.dir(firstEl); 

// let firstEl = document.querySelector("#myId");  
// console.dir(firstEl); 

/* document.querySelectorAll("myId/myClass/tag"); //returns all elements */
// let allEl = document.querySelectorAll("p"); 
// console.dir(allEl);

// let allEl = document.querySelectorAll(".myClass"); 
// console.dir(allEl);


//Properties -->get, set, change/update 
// 1)tagName : returns tag for element nodes 
// 2)innerText : returns the text content of the element and all its children
// 3)innerHtml : returns the plain text or HTML content in the element
// 3)textContent : returns textual content even for hidden elements
