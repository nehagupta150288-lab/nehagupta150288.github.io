// SLIDER
let index = 0;
const slides = document.querySelectorAll(".slider img");

function updateSlide() {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
}

document.getElementById("rightArrow").onclick = () => {
    index = (index + 1) % slides.length;
    updateSlide();
};

document.getElementById("leftArrow").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
};

// POPUP IMAGE
function openFull(img) {
    document.getElementById("popup-img").src = img;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
