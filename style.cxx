body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #fff;
}

/* NAVIGATION BAR */
.navbar {
    display: flex;
    align-items: center;
    padding: 15px 40px;
    background: #ffffff;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

.navbar img {
    height: 60px;
    margin-right: 40px;
}

.nav-links {
    flex: 1;
    text-align: center;
}

.nav-links a {
    margin: 0 25px;
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: bold;
}

/* FULLSCREEN SLIDER */
.slider {
    position: relative;
    margin-top: 95px;
    height: 100vh;
    overflow: hidden;
}

.slider img {
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1.5s;
}

.slider img.active {
    opacity: 1;
}

/* ARROWS */
.arrow {
    position: absolute;
    top: 50%;
    font-size: 60px;
    color: white;
    padding: 10px;
    cursor: pointer;
    user-select: none;
}

#leftArrow { left: 20px; }
#rightArrow { right: 20px; }

/* GALLERY */
.gallery {
    padding: 40px;
    text-align: center;
}

.gallery img {
    width: 250px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
}

.gallery img:hover {
    transform: scale(1.05);
}

/* FULLSCREEN IMAGE POPUP */
#popup {
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.9);
    justify-content: center;
    align-items: center;
    z-index: 20;
}

#popup img {
    max-width: 90%;
    max-height: 90%;
}

/* CONTACT PAGE */
.contact-container {
    margin-top: 120px;
    display: flex;
    padding: 40px;
}

.contact-form, .contact-info {
    width: 50%;
    padding: 20px;
}

.contact-form input, .contact-form textarea {
    width: 90%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #aaa;
    border-radius: 5px;
}

.contact-form button {
    padding: 12px 25px;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
}

/* ABOUT US */
.about-container {
    margin-top: 150px;
    padding: 40px;
    font-size: 20px;
    line-height: 1.8;
}
