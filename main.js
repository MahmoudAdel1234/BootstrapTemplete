// const navBar = document.querySelector(".navBar");

// console.log(navBar);

// document.addEventListener("scroll", function() {
//     if (window.scrollY > 150) {  
//         console.log(window.scrollY);
//         navBar.classList.add("navBar-behavior");
//         navBar.classList.remove("navBar-behavior2");
//     } else {  
//         navBar.classList.add("navBar-behavior2");
//         navBar.classList.remove("navBar-behavior");
//     }  
// });


let btns = document.querySelectorAll(".change");

btns.forEach((btn) => {
    btn.onclick = function() {
        btns.forEach((b) => b.classList.remove("active"));

        this.classList.add("active");

        btns.forEach((b) => b.style.background = "");
        this.style.background = "white";
    };
});