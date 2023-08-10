const carouselSlide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide .card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let counter = 0;
const slideWidth = images[0].clientWidth;

function slideNext() {
    if (counter >= images.length - 1) {
        carouselSlide.style.transition = "none"; 
        counter = -1;
    }
    counter++;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = `translateX(${-counter * slideWidth}px)`;
}

function slidePrev() {
    if (counter <= 0) {
        carouselSlide.style.transition = "none";
        counter = images.length;
    }
    counter--;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = `translateX(${-counter * slideWidth}px)`;
}

nextBtn.addEventListener("click", slideNext);
prevBtn.addEventListener("click", slidePrev);