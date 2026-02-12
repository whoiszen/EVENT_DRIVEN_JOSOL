//Parallax image
const hero = document.getElementById("hero");

window.addEventListener("scroll", ()=> {
    const scrollY = window.scrollY;
    const offsetTop = hero.offsetTop;
    const speed = 0.4;
    const yPos = (scrollY - offsetTop) * speed;
    hero.style.backgroundPosition = `center ${yPos}px`;
});

//Light and Dark mode wow duha
const darkBtn = document.getElementById("darkmode");
const lightBtn = document.getElementById("lightmode");

darkBtn.addEventListener("click", () => {
    document.body.classList.add("dark");
});

lightBtn.addEventListener("click", () => {
    document.body.classList.remove("dark");
});


//sa Sidebar ni
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" || event.key.toLowerCase() === "c") {
        sidebar.classList.remove("active");
    }

    if (event.key.toLowerCase() === "o") {
        sidebar.classList.add("active");
    }
});