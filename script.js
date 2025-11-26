window.onload = function() {

    // SLIDER
    let index = 0;
    const slides = document.querySelectorAll(".slider img");

    function showSlide() {
        slides.forEach(s => s.classList.remove("active"));
        slides[index].classList.add("active");
    }

    document.getElementById("rightArrow").onclick = () => {
        index = (index + 1) % slides.length;
        showSlide();
    };

    document.getElementById("leftArrow").onclick = () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide();
    };

    // GALLERY POPUP
    window.openFull = function(img) {
        document.getElementById("popup-img").src = img;
        document.getElementById("popup").style.display = "flex";
    }

    window.closePopup = function() {
        document.getElementById("popup").style.display = "none";
    }
};
