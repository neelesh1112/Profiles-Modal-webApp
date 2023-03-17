const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");



// Modal Open Fuction
const openModal = () =>{
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

// Modal Clase Function
const closeModal = () =>{
    console.log("Modal is Close");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};











var typeData = new Typed(".role", {
    strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
        "React Developer",
        "MERN Stack Developer "
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});
