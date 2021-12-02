var slideIndex = 1;
showSlide(slideIndex);

// kontrola przycisków prev i next
function plusSlide(n) {
    showSlide(slideIndex += n);
}

// kontrola grafik
function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slide = document.getElementsByClassName("mySlide");
    var dots = document.getElementsByClassName("dot");

    if (n > slide.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length} 
    for (i = 0; i < slide.length; i++) {
        slide [i].style.display = "none";
    }

    for (i = 0; i < slide.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slide[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}