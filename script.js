window.onload = function () {

    let index = 0;
    const slides = document.querySelectorAll(".slider img");
    const dots = document.querySelectorAll(".indicators span");

    function showSlide() {
        slides.forEach((s, i) => {
            s.classList.remove("active");
            dots[i].classList.remove("active-dot");
        });

        slides[index].classList.add("active");
        dots[index].classList.add("active-dot");
    }

    // Arrows
    document.getElementById("rightArrow").onclick = () => {
        index = (index + 1) % slides.length;
        showSlide();
    };

    document.getElementById("leftArrow").onclick = () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide();
    };

    // Dot clicking
    window.goToSlide = function(i){
        index = i;
        showSlide();
    }

    // Gallery popup
    window.openFull = function(img) {
        document.getElementById("popup-img").src = img;
        document.getElementById("popup").style.display = "flex";
    }

    window.closePopup = function() {
        document.getElementById("popup").style.display = "none";
    }
};
