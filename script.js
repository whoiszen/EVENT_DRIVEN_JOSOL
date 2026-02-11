const hero = document.getElementById("hero");

window.addEventListener("scroll", ()=> {
    const scrollY = window.scrollY;
    const offsetTop = hero.offsetTop;
    const speed = 0.4;
    const yPos = (scrollY - offsetTop) * speed;
    hero.style.backgroundPosition = `center ${yPos}px`;
});

const projects = document.getElementById("projects");
projects.addEventListener('mouseover', () => {
    projects.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
});
projects.addEventListener('mouseout', () => {
    projects.style.backgroundColor = "";
});

    
const darkBtn = document.getElementById("darkmode");
const lightBtn = document.getElementById("lightmode");

darkBtn.addEventListener("click", () => {
    document.body.classList.add("dark");
});

lightBtn.addEventListener("click", () => {
    document.body.classList.remove("dark");
});

const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});


document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        sidebar.classList.remove("active");
    }
});