console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully!");
}

let img = document.querySelector('#streetArt')

img.addEventListener('mouseover', () => {
	alert("You have good taste in art!")
});

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);