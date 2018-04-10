var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
    x[slideIndex-1].classList.add("active")
} 

document.onkeydown = checkKey;

function checkKey(e) {
    if ((e.keyCode || e.which) == 37)
    {
         plusDivs(-1);
}
    if ((e.keyCode || e.which) == 39)
    {
        plusDivs(+1);
    }

}
