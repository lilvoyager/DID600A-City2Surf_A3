// This solution is based on https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex = 0;
// have to wait for the images to load into the document first before executing the function.
// explanation found here - https://stackoverflow.com/questions/32222255/cant-access-the-value-of-htmlcollection
window.addEventListener('load', carousel);

function carousel() {
  var x = document.getElementsByClassName("hero_slideshow");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}