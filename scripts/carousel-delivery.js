var slideIndex = 1;
showDeliverySlides(slideIndex);

function plusSlides(n) {
  showDeliverySlides(slideIndex += n);
}

// Thumbnail image controls
function currentDeliverySlide(n) {
  showDeliverySlides(slideIndex = n);
}

function showDeliverySlides(n) {
  var i;
  var slides = document.getElementsByClassName("item-delivery-img");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 
