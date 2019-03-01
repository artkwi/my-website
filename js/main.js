var hamburger = document.querySelector('.hamburger');
console.log(hamburger);
hamburger.addEventListener('click', function() {
    document.querySelector('.page-header').classList.toggle('navigation-opened');

}, false);