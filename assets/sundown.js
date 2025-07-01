
//For smooth scrolling :-
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//Overlay add images effect :-
var elemc = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
elemc.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
});
elemc.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
});


var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
    });
});


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
swiperAnimation();


var menu = document.querySelector("#nav h3");
var full = document.querySelector("#full-scr");
var navimg = document.querySelector("#nav img");
var flag = 0;
menu.addEventListener("click", function () {
    if (flag == 0) {
        full.style.top = 0;
        navimg.style.opacity = 0;
        flag = 1;
    }
    else {
        full.style.top = "-100%";
        navimg.style.opacity = 1;
        flag = 0;
    }
});

var myloader = document.querySelector("#myloader");
setTimeout(function(){
    myloader.style.top="-100%";
},3700)


