
//when you hover over an image, change the text to something else

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  let videos = document.getElementsByClassName("slide-video");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    if (videos[i]) {
      videos[i].pause();
      videos[i].currentTime = 0;
    }
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  if (videos[slideIndex - 1]) {
    videos[slideIndex - 1].play();
  }
  setTimeout(showSlides, 8000); // Change image every 8 seconds
}

function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();
  
  // Clear all input fields
  this.reset();
});
