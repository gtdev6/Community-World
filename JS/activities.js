const fitnessImages = document.querySelectorAll(".activity-card-s1 .activity-card-image-wrapper img")
const recreationImages = document.querySelectorAll(".activity-card-s2 .activity-card-image-wrapper img")
const educationImages = document.querySelectorAll(".activity-card-s3 .activity-card-image-wrapper img")




function Carousel(containerId, images) {
	this.container = document.getElementById(containerId);
	this.images = images;
	this.currentSlide = 0;

	this.init = function() {
		this.play();
	};

	this.play = function() {
		setInterval(() => {
			this.next();
		}, 3000);
	};

	this.next = function() {
		if (this.currentSlide === this.images.length - 1) {
			this.currentSlide = 0;
		} else {
			this.currentSlide++;
		}
		this.showSlide(this.currentSlide);
	};

	this.showSlide = function(index) {
		const carouselInner = this.container.querySelector('.activity-card-image-wrapper');
		const offset = -index * 100;
		carouselInner.style.transform = `translateX(${offset}%)`;
	};

	this.init();
}


if(fitnessImages){
	const fitnessCarousel = new Carousel('activity-card-s1', fitnessImages);
	const recreationCarousel = new Carousel('activity-card-s2', recreationImages);
	const educationCarousel = new Carousel('activity-card-s3', educationImages);
}