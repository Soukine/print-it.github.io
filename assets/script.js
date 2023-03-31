const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const slider = document.querySelectorAll(".banner-img");
let slideLength = slides.length;
let title = document.querySelector("#banner > p");
let count = 0;
let dot = document.querySelectorAll(".dot");

for (let i = 0; i < slideLength; i++) {
	dots.innerHTML = dots.innerHTML + "<div class='dot'></div>";
}
slider.src = `./assets/images/slideshow/${count}.jpg`;
title.innerHTML = slides[count].tagLine;
console.log(count);

function leftSlide() {
	count--;
	if (count < 0) {
		count = slides.length - 1;
	}
	showSlide(count);
}

function rightSlide() {
	count++;
	if (count > slides.length - 1) {
		count = 0;
	}
	showSlide(count);
}

arrowLeft.addEventListener('click', rightSlide);
arrowRight.addEventListener('click', leftSlide);

showSlide(count);