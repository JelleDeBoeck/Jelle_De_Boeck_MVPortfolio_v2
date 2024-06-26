//javascript Responsive Nav

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
        
//javascript Back To Top button

let mybutton = document.getElementById("backToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let heading = document.querySelector('.heading');
    let headingHeight = heading.offsetHeight;
    let footer = document.querySelector('.footer');
    let footerPosition = footer.offsetTop;

    if (document.body.scrollTop > headingHeight || document.documentElement.scrollTop > headingHeight) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

    if (document.body.scrollTop + window.innerHeight >= footerPosition || document.documentElement.scrollTop + window.innerHeight >= footerPosition) {
        mybutton.classList.add('white');
    } else {
        mybutton.classList.remove('white');
    }
}

mybutton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

ScrollReveal().reveal('.heading', { duration: 3000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('#about', { duration: 1000, origin: 'left', distance: '50px' });
ScrollReveal().reveal('#projects', { duration: 1000, origin: 'right', distance: '50px' });
ScrollReveal().reveal('#skills', { duration: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('#contact', { duration: 1000, origin: 'top', distance: '50px' });


window.onload = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};
