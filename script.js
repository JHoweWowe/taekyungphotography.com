

var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

var image1 = document.getElementById("pic1");
var image2 = document.getElementById("pic2");
var image3 = document.getElementById("pic3");
var image4 = document.getElementById("pic4");

var modalImg1 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");

var textCaption1 = document.getElementById("caption1");
var textCaption2 = document.getElementById("caption2");
var textCaption3 = document.getElementById("caption3");
var textCaption4 = document.getElementById("caption4");

image1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  textCaption1.innerHTML = this.alt;
}
image2.onclick = function() {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  textCaption2.innerHTML = this.alt;
}
image3.onclick = function() {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  textCaption3.innerHTML = this.alt;
}
image4.onclick = function() {
  modal4.style.display = "block";
  modalImg4.src = this.src;
  textCaption4.innerHTML = this.alt;
}

var span = document.getElementById("myModal1").getElementsByClassName("close")[0];
var span2 = document.getElementById("myModal2").getElementsByClassName("close")[0];
var span3 = document.getElementById("myModal3").getElementsByClassName("close")[0];
var span4 = document.getElementById("myModal4").getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close modal and the display would be hidden
span.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}

/* Code for the following slideshow... */

//Creates the variable for the slideIndex number and then shows the 1st slide by default
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
  //If the slideNumber is already the last one, put the slideNumber to be the first one
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
