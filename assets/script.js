const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

const slidesLength = slides.length;
let count = 0;

const bannerImg = document.querySelector(".banner-img");
const title = document.querySelector(".banner-img + p");

const dots = document.querySelector(".dots");
let dot = document.querySelectorAll(".dot");

for (let i = 0; i < slidesLength; i++) {
	dots.innerHTML += "<div class='dot'></div>";
}


bannerImg.src = "./assets/images/slideshow/" + slides[count].image;
dot[count].classList.add("dot_selected");
title.innerHTML = slides[count].tagLine;


arrowLeft.addEventListener("click", () => {
	dot[count].classList.remove("dot_selected");
	count--;

	if (count === -1) {
		count = slidesLength - 1;
	}

	bannerImg.src = "./assets/images/slideshow/" + slides[count].image;
	dot[count].classList.add("dot_selected");
	title.innerHTML = slides[count].tagLine;

});

arrowRight.addEventListener("click", () => {
	dot[count].classList.remove("dot_selected");
	count++;

	if (count === 4) {
		count = 0;
	}

	bannerImg.src = "./assets/images/slideshow/" + slides[count].image;
	dot[count].classList.add("dot_selected");
	title.innerHTML = slides[count].tagLine;

});
