window.onload = function () {

    let index = 0;
    const slides = document.querySelectorAll(".slider-container img");
    const dots = document.querySelectorAll(".indicators span");

    function updateSlider() {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active-dot"));

        slides[index].classList.add("active");
        dots[index].classList.add("active-dot");
    }

    document.getElementById("rightArrow").onclick = () => {
        index = (index + 1) % slides.length;
        updateSlider();
    };

    document.getElementById("leftArrow").onclick = () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    };

    window.goToSlide = function(i){
        index = i;
        updateSlider();
    }

    /* FULL SIZE IMAGE PREVIEW */
    window.openImage = function(src){
        document.getElementById("full-img").src = src;
        document.getElementById("fullview").style.display = "flex";
    }

    window.closeFull = function(){
        document.getElementById("fullview").style.display = "none";
    }

    /* WHATSAPP */
    document.getElementById("whatsapp").onclick = function() {
        window.open("https://wa.me/91123456789", "_blank");
    }
};
