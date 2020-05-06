// var slideIndex = 1;
// showDivs(slideIndex, "album-pv");
// showDivs(slideIndex, "album-oi");


// function plusDivs(n, albumName) {
//   showDivs(slideIndex += n, albumName);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n,albumName) {
//   var i;
//   var x = document.getElementsByClassName(albumName);
//   /* var dots = document.getElementsByClassName("demo"); */
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   /* for (i = 0; i < dots.length; i++) { */
//     /* dots[i].className = dots[i].className.replace(" w3-white", ""); */
//   /* } */
//   x[slideIndex-1].style.display = "block";  
//   /* dots[slideIndex-1].className += " w3-white"; */
// }

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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides.bind(null, slideIndex = slideIndex+1), 3000);
}  