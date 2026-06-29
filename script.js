console.log("JavaScript Connected");


function sayHello(){
    alert("Hello Sneha!");
}
function showMessage(){
    alert("Welcome to my Portfolio!")
}

// function changeTitle(){
//     document.getElementById("hero-title").innerHTML="Welcome to My portfolio!";
// }
// function changeColor() {
//     document.getElementById("hero-title").style.color = "red";
// }

// const button = document.querySelector(".btn");

// button.addEventListener("click" , function(){
//     document.querySelector("#hero-title").textContent="Welcome to My portfolio!"
// })
// const darkBtn= document.querySelector("#dark-btn");

// darkBtn.addEventListener("click",function(){

//     document.body.style.background="black";
//     document.body.style.color="white";
// });
const hirebtn = document.querySelector("#hire-btn");
const title = document.querySelector("#hero-title");

hirebtn.addEventListener("click",function(){
    if(title.textContent=="Hi,I'm Sneha 👋"){
        title.textContent="Welcome to My portfolio!";
    }else{
        title.textContent="Hi,I'm Sneha 👋";
    }
});

const colorBtn = document.querySelector("#color-btn");

colorBtn.addEventListener("click", function () {

    if (title.style.color === "red") {

        title.style.color = "black";

    } else {

        title.style.color = "red";

    }

});

// const darkBtn = document.querySelector("#dark-btn");

// darkBtn.addEventListener("click", function () {

//     if (document.body.style.backgroundColor === "black") {

//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";

//     } else {

//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";

//     }

// });
const darkBtn = document.querySelector("#dark-btn");

darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});