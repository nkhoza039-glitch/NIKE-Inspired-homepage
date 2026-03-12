let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  // Get all elements with class "mySlides"
  let slides = document.getElementsByClassName("mySlides");
  // Get all elements with class "dot"
  let dots = document.getElementsByClassName("dot");
  
  // Wrap around from last slide to first
  if (n > slides.length) {
    slideIndex = 1
  }
  // Wrap around from first slide to last
  if (n < 1) {
    slideIndex = slides.length
  }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove the 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide and set the active dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
