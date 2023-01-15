let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbar").classList.replace("py-8","py-1");
        document.querySelector(".navbar").classList.replace("border-b-8","border-b-2");
        document.querySelector(".navigationButtons").classList.replace("text-xl","text-lg");
        document.querySelector(".logo").classList.replace("text-3xl","text-lg");
        document.querySelector(".navigationButtons button").innerText = "Subscribe";
        document.querySelector(".navigationButtons button").innerText = "Subscribe";
    }
    else if (document.body.scrollTop > 1250 || document.documentElement.scrollTop > 1250) {
        document.querySelector(".navbar").classList.replace("py-8","py-1");
    }else{
        document.querySelector(".navbar").classList.replace("py-1","py-8");
        document.querySelector(".navbar").classList.replace("border-b-2","border-b-8");
        document.querySelector(".navigationButtons").classList.replace("text-lg","text-xl");
        document.querySelector(".logo").classList.replace("text-lg","text-3xl");
        document.querySelector(".navigationButtons button").innerText = "Subscribe Blog";

    }
}
