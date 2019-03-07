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

// progress bar

var progressbar = document.querySelector('.progress-bar');

const statusBar = () => {
    var currentScroll = Math.round((window.scrollY) / (document.documentElement.offsetHeight -  window.innerHeight)* 100) ;
    console.log(currentScroll);
    progressbar.style.width = currentScroll + '%';
}

window.addEventListener('scroll', statusBar);