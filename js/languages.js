// define languages reload anchors
var dataReload = document.querySelectorAll('[data-reload]');

// Language dictionary 
var language = {
    eng: {
        welcome: "Hello!"
    },
    pl: {
        welcome: "Witaj!"
    }

};

// Define site language via window hash
if (window.location.hash) {
    if (window.location.hash === "#eng") {
        hi.textContent = language.eng.welcome;
    }
}

// reload site on click
dataReload.forEach(reloader => {
    reloader.addEventListener('click', function() {
        location.reload(true);
    })
});