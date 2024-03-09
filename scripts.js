let menuIcon = document.getElementById("menu-icon");
let closeIcon = document.getElementById("close-icon")
let navbar = document.getElementById("navbar")
let navLinks = document.querySelectorAll(".dropdown-links")


menuIcon.addEventListener("click", function(){
    navbar.style.height = "auto";
    navLinks.forEach((element) => {
        element.style.display = "block";
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    });
});

closeIcon.addEventListener("click", function(){
    navbar.style.height = "0";
    navLinks.forEach((element) => {
        element.style.display = "none";
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    });
});
