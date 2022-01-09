// positions the current slide
let slideIndex = 1;
showSlides(slideIndex);

// used to control the next an previous buttons, by adding or subtracting the number of slides
function nextSlide(n) {
  showSlides(slideIndex += n);
}


//slideshow function, it makes this whole thing work
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  //makes sure the slide show dosent end
  if (n > slides.length) {

    slideIndex = 1;
  }
  if (n < 1) {

    // "counts" the present slides and puts it inside the value "slideIndex"
    slideIndex = slides.length;
  }


  // puts the other images to display none
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  //replaces the class name "active" with nothing who in return nullifying the hover effet in css
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  //shows the current image with the display "active"
  slides[slideIndex-1].style.display = "block";

  //links the current "dot" with the class name "active" who in return triggers a hover effect in css
  dots[slideIndex-1].className += " active";
}