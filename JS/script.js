const time = 4000
let currentImageIndex = 0
const images = document.querySelectorAll("#slider img")
const dots = document.querySelectorAll("#dots span")
const max = images.length;
const dotsMax = dots.length

function nextImage() {

    images[currentImageIndex].classList.remove("selected");
    dots[currentImageIndex].classList.remove("dot");

    currentImageIndex++

    if (currentImageIndex >= max && currentImageIndex >=dotsMax)
        currentImageIndex = 0;

    images[currentImageIndex].classList.add("selected");
    dots[currentImageIndex].classList.add("dot");
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)