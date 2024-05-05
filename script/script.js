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

function setCurrentslide(n) {
  showSlides(slideIndex = n);
}

// Get all dropdown links
let dropdowns = document.querySelectorAll('.dropdown');

// Loop through each dropdown link
dropdowns.forEach(dropdown => {
  // Add click event listener
  dropdown.addEventListener('click', function(event) {
    // Prevent the default action
    event.preventDefault();

    // Get the dropdown menu
    let dropdownMenu = this.nextElementSibling;

    // Toggle the 'show' class
    dropdownMenu.classList.toggle('show');
  });
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown')) {
    let dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(dropdownMenu => {
      if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
      }
    });
  }
}