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

const boxes = document.querySelectorAll(".banner-img");
console.log(boxes);
boxes.forEach((box) => {
	box.addEventListener("click", (e) => {
		console.log(e.target);
	})
})

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

function Carousel(count) {
	dots.forEach((index, item) => {
		if (index === count) {
			item.classList.add("dot_selected");
		} else {
			item.classList.remove("dot_selected");
		}
	})
	slider.src = `./assets/images/slideshow/${countImage}`;
	textBanner.innerHTML = title;
	console.log(count);
};
