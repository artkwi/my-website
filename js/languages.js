// define languages reload anchors
var dataReload = document.querySelectorAll('[data-reload]');

// Language dictionary 
var language = {
    eng: {
        welcome: "Hello!",
        aboutMe: "About me",
        education: "Education",
        experience: "Experience",
        skills: "Skills",
        contact: "Contact"
    },
    pl: {
        welcome: "Witaj!",
        aboutMe: "O mnie",
        education: "Wykształcenie",
        experience: "Doświadczenie",
        skills: "Umiejętności",
        contact: "Kontakt"
    }

};

// Define site language via window hash
if (window.location.hash) {
    if (window.location.hash === "#eng") {
        $("#hi").text(language.eng.welcome);
        $("#about-me-item, .about-me-title").text(language.eng.aboutMe);
        $("#education-item, #education-title").text(language.eng.education);
        $("#work-experience-item, #work-experience-title").text(language.eng.experience);
        $("#skills-item, #skills-title").text(language.eng.skills);
        $("#contact-item, #contact-title").text(language.eng.contact);
    }
}

// reload site on click
dataReload.forEach(reloader => {
    reloader.addEventListener('click', function() {
        location.reload(true);
    })
});