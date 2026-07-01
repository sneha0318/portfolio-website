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

const form = document.querySelector("#Contact-form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if(name ==="" || email ==="" || message ===""){

        alert("please fill all fields");
    }else{
        alert("Form submitted Successfully!");
    }
})

const message = document.querySelector("#message");
const count = document.querySelector("#count");

 message.addEventListener("input", function(){
    count.textContent=message.value.length;
 });

 const nameInput = document.querySelector("#name");
const preview = document.querySelector("#preview");

nameInput.addEventListener("input", function () {
    preview.textContent = nameInput.value;
});
// //  const nameInput = document.querySelector("#name");
//  const preview = document.querySelector("#preview");


//  nameInput.addEventListener("input" , function(){
//     preview.textContent=nameInput.value;
//  })

// const eye = document.querySelector("#toggle-password");

// eye.addEventListener("click", function () {

//     if (password.type === "password") {
//         password.type = "text";
//         eye.classList.remove("fa-eye-slash");
//         eye.classList.add("fa-eye");
//     } else {
//         password.type = "password";
//         eye.classList.remove("fa-eye");
//         eye.classList.add("fa-eye-slash");
//     }

// });

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", function(){
   document.querySelector("#Contact-form").reset();
})

const copyBtn = document.querySelector("#copy-btn");
const copyText = document.querySelector("#copy-text");

copyBtn.addEventListener("click", function () {

    navigator.clipboard.writeText(copyText.value);

    alert("Copied!");

});

// const projects=["portfolio website","Landing page","Calculator"];
// for(let i=0; i<projects.length;i++){
//     console.log(projects[i]);
// }

// const product={
//     name:"Ring",
//     price:1999,
//     color:"Gold"
// };

// console.log(product.name);
// console.log(product.price);
// console.log(product.color);

const projectsList=[
    {
        title:"Portfolio Website",
        technology:"HTML & CSS"
    },
    {
        title:"Landing Page",
        technology:"HTML & CSS"
    },
    {
        title:"Calculator",
        technology:"HTML,CSS,JAVASCRIPT"
    }
];

for(let i=0; i< projectsList.length; i++){
    console.log(projectsList[i].title);
}

const projects = [
    { title: "Portfolio Website" },
    { title: "Landing Page" },
    { title: "Calculator" }
];

// const container = document.querySelector("#projects");

// for (const project of projects) {
//     container.innerHTML += `<h3>${project.title}</h3>`;
// }

const ages =[12,18,20,25,30];

const adults = ages.filter(age => age >=18);
console.log(adults);

const doubles = ages.map(age => age*2);
console.log(doubles);

const firstAdult = ages.find(age =>age >=18);
console.log(firstAdult);

// console.log("JavaScript Connected");

// const items=[
//     { name:"Laptop", price: 50000},
// { name:"Phone", price:20000 }
// ];

// // ui container
// const container=document.querySelector("#container");

// // map()use karke cards banana 
// items.map((item) =>{
//     // console output
//     console.log(item.name, item.price);

//     // UI output
//     container.innerHTML += `
//         <div class="card">
//             <h3>${item.name}</h3>
//             <p>₹${item.price}</p>
//         </div>
//     `;
// });

// products.json
fetch("products.json")
.then(response => response.json())
.then(items => {

    const container = document.querySelector("#container");

    items.forEach(item => {

        container.innerHTML += `
            <div class="card">
                <img src="${item.image}">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>
        `;

    });

});

// const container = document.querySelector("#container");

// items.forEach((item) => {
//     container.innerHTML += `
//         <div class="card">
//             <img src="${item.image}" alt="${item.name}">
//             <h3>${item.name}</h3>
//             <p>₹${item.price}</p>
//         </div>
//     `;
// });

// ===== My Skills =====

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub"
];

const skillsContainer = document.querySelector("#skills-container");

skills.forEach(skill => {
    skillsContainer.innerHTML += `
        <div class="skill-card">
            <h3>${skill}</h3>
        </div>
    `;
});
// const saveBtn = document.querySelector("#save-btn");

// const input = document.querySelector("#storage-name");

// const output = document.querySelector("#saved-name");

// saveBtn.addEventListener("click" , function(){
//     localStorage.setItem("username",input.value);

//     output.textContent="Saved Name:" + input.value;
// });
// const saved = localStorage.getItem("username");

// if(saved){

//     output.textContent =
//     "Saved Name : " + saved;

// }
// const removeBtn =
// document.querySelector("#remove-btn");

// removeBtn.addEventListener("click", function(){

//     localStorage.removeItem("username");

//     output.textContent = "";

//     input.value = "";

// });

const saveBtn = document.querySelector("#save-btn");
const removeBtn = document.querySelector("#remove-btn");
const output = document.querySelector("#saved-name");

// Page load par
const savedName = localStorage.getItem("username");

if (savedName) {
    output.textContent = "Welcome, " + savedName + " 👋";
    nameInput.value = savedName;
}

// Save
saveBtn.addEventListener("click", function () {

    if (nameInput.value.trim() === "") {
        alert("Please enter your name");
        return;
    }

    localStorage.setItem("username", nameInput.value);

    output.textContent = "Welcome, " + nameInput.value + " 👋";
});

// Remove
removeBtn.addEventListener("click", function () {

    localStorage.removeItem("username");

    nameInput.value = "";

    preview.textContent = "Your Name";

    output.textContent = "";
});
const loadBtn = document.querySelector("#load-users");
const usersContainer = document.querySelector("#users-container");

loadBtn.addEventListener("click", loadUsers);

async function loadUsers() {

    usersContainer.innerHTML = "<h3>Loading...</h3>";

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const users = await response.json();

        usersContainer.innerHTML = "";

        users.forEach(user => {

            usersContainer.innerHTML += `
                <div class="user-card">
                    <h3>${user.name}</h3>
                    <p>${user.email}</p>
                    <p>${user.phone}</p>
                </div>
            `;

        });

    }

    catch(error){

        usersContainer.innerHTML =
        "<h3>Something went wrong!</h3>";

    }

}