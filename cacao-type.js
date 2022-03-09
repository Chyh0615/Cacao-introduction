var backToTopbtn = document.querySelector("#backToTop");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if(window.pageYOffset > 400) {
        backToTopbtn.style.display = "block";
    }else {
        backToTopbtn.style.display = "none";
    }
}

backToTopbtn.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}