/* ================= MAIN BANNER SLIDER ================= */
let index = 0;
const slides = document.querySelectorAll(".slider-container img");
const dots = document.querySelectorAll(".indicators span");

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active-dot"));

    slides[i].classList.add("active");
    dots[i].classList.add("active-dot");
}

document.getElementById("rightArrow").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

document.getElementById("leftArrow").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};

dots.forEach((dot, i) => {
    dot.onclick = () => {
        index = i;
        showSlide(index);
    };
});

/* ================= ACHIEVEMENTS SLIDER ================= */
let achIndex = 0;
const achImages = document.querySelectorAll(".ach-slider img");

function showAch(i) {
    achImages.forEach(a => a.classList.remove("active"));
    achImages[i].classList.add("active");
}

document.getElementById("achRight").onclick = () => {
    achIndex = (achIndex + 1) % achImages.length;
    showAch(achIndex);
};
document.getElementById("achLeft").onclick = () => {
    achIndex = (achIndex - 1 + achImages.length) % achImages.length;
    showAch(achIndex);
};

/* ================= PORTFOLIO POPUP ================= */
function openFull(img) {
    document.getElementById("popup-img").src = img;
    document.getElementById("popup").style.display = "flex";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

/* ================= CONTACT & WHATSAPP WIDGET ================= */
document.getElementById("contactBtn").onclick = () => {
    document.getElementById("contactPopup").style.display = "block";
};
document.getElementById("closeContact").onclick = () => {
    document.getElementById("contactPopup").style.display = "none";
};

document.getElementById("whatsappBtn").onclick = () => {
    window.open("https://wa.me/911234567890", "_blank");
};
