// Events in JS:
// The change in the state of an object is known as an Event.
// Events are fired to notify code of "interesting changes" that may affect code execution.

// * Mouse events(click, double click etc.)
// * Keyboard events(keypress , keyup, keydown)
// * form events(submit etc)
// * Print event & many more


// EVENT HANDLING IN JS
// node.event=()=>{
//     //handle here
// }

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
// }

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
  
// }

// let box = document.querySelector("div");
// box.onmouseover = () => {
//     console.log("you are inside a box")
// }


//EVENT LISTENERS: ---> An event listener is a procedure or function in a computer program that waits for an event to occur. When the event occurs, the listener reacts by executing a block of code associated with that event.
// why to use?:

// node.addEventListener(event,callback)
// node.removeEventListner(event,callback)
// *Note: the callback Reference should be same to remove

// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler1");
// });
// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });
// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler3");
// });
// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler4");
// });

//To Remove eventListeners
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler1");
});
btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
});
const handler3 = () => {
    console.log("button1 was clicked - handler3")
};
btn1.addEventListener("click",handler3);
btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler4");
});

btn1.removeEventListener("click",handler3);