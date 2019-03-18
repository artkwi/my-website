// define languages reload anchors
var dataReload = document.querySelectorAll('[data-reload]');

// Language dictionary 
var language = {
    eng: {
        welcome: "Hello!",
        aboutMe: "About me"
    },
    pl: {
        welcome: "Witaj!",
        aboutMe: "O mnie"
    }

};

// Define site language via window hash
if (window.location.hash) {
    if (window.location.hash === "#eng") {
        $("#hi").text(language.eng.welcome);
        $("#about-me-item").text(language.eng.aboutMe);
    }
}

// reload site on click
dataReload.forEach(reloader => {
    reloader.addEventListener('click', function() {
        location.reload(true);
    })
});