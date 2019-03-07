// navigation menu
var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function() {
    document.querySelector('.page-header').classList.toggle('navigation-opened');

}, false);

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
    console.log(currentScroll);
    progressbarHorizontal.style.width = currentScroll + '%';
    progressbarHorizontal2.style.width = currentScroll + '%';
    progressbarVertical.style.height = currentScroll + '%';
    progressbarVertical2.style.height = currentScroll + '%';

}

window.addEventListener('scroll', statusBar);
