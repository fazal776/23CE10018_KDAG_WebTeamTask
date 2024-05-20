let btn = document.getElementsByName("btn");
let day = document.querySelector(".day")
let week = document.querySelector(".week")
let anchor = document.querySelectorAll(".nav-elements a");
let about = document.querySelector(".about_course");
let structure = document.querySelector(".course_structure")
let home = document.querySelector(".home");

day.classList.add("hide");

anchor[0].addEventListener("click", ()=>{
    if(home.classList.value === "home hide"){
        home.classList.remove("hide");
        if(about.classList.value === "about_course"){
            about.classList.add("hide");
        }else{
            structure.classList.add("hide");
        }
    }
})

anchor[1].addEventListener("click", ()=>{
    if(about.classList.value === "about_course hide"){
        about.classList.remove("hide");
        if(home.classList.value === "home"){
            home.classList.add("hide");
        }else{
            structure.classList.add("hide");
        }
    }
})

anchor[2].addEventListener("click", ()=>{
    if(structure.classList.value === "course_structure hide"){
        structure.classList.remove("hide");
        if(home.classList.value === "home"){
            home.classList.add("hide");
        }else{
            about.classList.add("hide");
        }
    }
})

btn[0].addEventListener("click", ()=>{
    btn[0].classList.add("btnOn");
    btn[1].classList.remove("btnOn");
    week.classList.remove("hide");
    day.classList.add("hide");
})

btn[1].addEventListener("click", ()=>{
    btn[1].classList.add("btnOn");
    btn[0].classList.remove("btnOn");
    day.classList.remove("hide");
    week.classList.add("hide");
})