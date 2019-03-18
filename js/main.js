// navigation menu
var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function() {
    document.querySelector('.page-header').classList.toggle('navigation-opened');

}, false);

// smooth scroll
// excluding language anchors
document.querySelectorAll('a[href^="#"]:not([href="#eng"]):not([href="#pl"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelector('.page-header').classList.toggle('navigation-opened');
    });
});

// four progress bars

var progressbarHorizontal = document.querySelector('.progress-bar-horizontal');
var progressbarHorizontal2 = document.querySelector('.progress-bar-horizontal-2');
var progressbarVertical = document.querySelector('.progress-bar-vertical');
var progressbarVertical2 = document.querySelector('.progress-bar-vertical-2');

const statusBar = () => {
    var currentScroll = Math.round((window.scrollY) / (document.documentElement.offsetHeight -  window.innerHeight)* 100) ;

    progressbarHorizontal.style.width = currentScroll + '%';
    progressbarHorizontal2.style.width = currentScroll + '%';
    progressbarVertical.style.height = currentScroll + '%';
    progressbarVertical2.style.height = currentScroll + '%';
}

window.addEventListener('scroll', statusBar);

// stick desktop navigation
const stickNavigation = () => {
    var currentScroll = Math.round((window.scrollY) / (document.documentElement.offsetHeight -  window.innerHeight)* 100);
    if(currentScroll == 0) {
        document.querySelector('.page-header .page-navigation ul').classList.add('sticked-header');
    } else if (currentScroll > 0) {
        document.querySelector('.page-header .page-navigation ul').classList.remove('sticked-header');
    }
}

window.addEventListener('scroll', stickNavigation) ;

// Animations
ScrollReveal().reveal('section > *', {delay: 200, duration: 1200,  origin: 'left', distance: '100%'});