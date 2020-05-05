// Opens the Modal
function openModal() {
  document.getElementById("myModal").style.opacity = "1";
  document.getElementById("myModal").style.transform = "scale(1, 1)";
}

// Closes the Modal
function closeModal() {
  document.getElementById("myModal").style.opacity = "0";
  document.getElementById("myModal").style.transform = "scale(0, 0)";
}

var slideIndex = 1;
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
  var slides = document.getElementsByClassName("mySlides");
  var indicators = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (var i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  indicators[slideIndex - 1].className += " active";
  captionText.innerHTML = indicators[slideIndex - 1].alt;
}