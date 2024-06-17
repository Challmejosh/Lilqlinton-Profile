const backGround = document.querySelector(".background");
const changeTheme = document.querySelector(".changeTheme");
const mainContent = document.querySelector(".mainContent");
const body= document.querySelector("body");

backGround.addEventListener("click", ()=>{
    changeTheme.classList.toggle("active");
    mainContent.classList.toggle("active");
    body.classList.toggle("active");
    changeTheme.classList.toggle("active");
})