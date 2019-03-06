var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function() {
    document.querySelector('.page-header').classList.toggle('navigation-opened');

}, false);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelector('.page-header').classList.toggle('navigation-opened');
    });
});