let slideIndex = 1;
showSlides(slideIndex);

// Set a timer to change slide every 3 seconds
setInterval(nextSlide, 6000, 1);

function nextSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : slideIndex;

  Array.from(slides).forEach((slide, i) => {
    slide.style.display = "none";
    if (i === slideIndex - 1) {
      slide.style.display = "block";
    }
  });

  Array.from(dots).forEach((dot, i) => {
    dot.className = dot.className.replace(" active", "");
    if (i === slideIndex - 1) {
      dot.className += " active";
    }
  });
}