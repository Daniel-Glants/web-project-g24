var Indexslide = 1;
showSlide(Indexslide);

function Slidesplus(n) {
    showSlide(Indexslide += n);
}

function Slidecurrent(n) {
    showSlide(Indexslide = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("Slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {Indexslide = 1}
    if (n < 1) {Indexslide = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[Indexslide-1].style.display = "block";
    dots[Indexslide-1].className += " active";
}
