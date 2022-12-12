let slideIndex = 1;

function plusSlide(n) {
    showSlide(slideIndex +=n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    console.log(slides);
    console.log(dots);

    // delete old slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // delete dot active 
    for (let i =0;i< dots.length;i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    
    // slideIndex-1
    slides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className +=" active";
   
}

showSlide(slideIndex);