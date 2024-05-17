//Q)

// let b = document.querySelector("body");
// let btn = document.querySelector("#mode");
// let currentMode = "light";
// btn.addEventListener("click", () => {
//     if(currentMode === "light"){
//         b.style.backgroundColor = "black";
//         currentMode = "dark";
//         console.log("changed to " + currentMode);
//     }
//     else{
//         b.style.backgroundColor = "white";
//         currentMode = "light";
//         console.log("changed to " + currentMode);
//     }
// });

let b = document.querySelector("body");
let btn = document.querySelector("#mode");
let currentMode = "light";
btn.addEventListener("click", () => {
    if(currentMode === "light"){
        b.classList.add("dark")
        currentMode = "dark";
        console.log("changed to " + currentMode);
        b.classList.remove("light");
    }
    else{
        b.classList.add("light")
        currentMode = "light";
        console.log("changed to " + currentMode);
        b.classList.remove("dark");
    }
});