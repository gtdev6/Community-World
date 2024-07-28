
const button = document.querySelector('.nav-btn');
const supportFormButton = document.getElementById('support-form-btn');
const navContainer = document.querySelector('.nav-style');




button.addEventListener("click", function() {
		navContainer.classList.toggle("show");
});

if(supportFormButton){
	supportFormButton.addEventListener("click",(e) => {
		e.preventDefault();
	});
}


