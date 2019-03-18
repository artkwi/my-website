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
        contact: "Contact",
        education1: "Adam Mickiewicz University in Poznań - IT Engineer at Faculty of Mathematics and Computer Science - Bachelor of Engineering degree2",
        education2: "Università della Calabria - Erasmus+ exchange programme in Italy",
        education3: "Stanisław Staszic secondary technical school of information technology in Nowy Tomyśl - IT Technician degree and Gold Student honour",

        experience1: "Internship in Żabka Polska - first line of support",
        experience2: "Internship in Phoenix Contact - .NET programmer",
        experience3: "Europass Mobility international intership of information technology in „BBS1” in German",

        skills1: "Internet technology:",
        skills2: "Object-oriented programming:",
        skills3: "Familiary with:",
        skills4: "English",
        skills5: "Knowledge of construction and diagnostics of computer equipment",
        skills6: "Driving license B category"

    },
    pl: {
        welcome: "Witaj!",
        aboutMe: "O mnie",
        education: "Wykształcenie",
        experience: "Doświadczenie",
        skills: "Umiejętności",
        contact: "Kontakt",
        education1: "Uniwersytet im. Adama Mickiewicza w Poznaniu na Wydziale Matematyki i Informatyki - tytuł inżyniera1",
        education2: "Università della Calabria - studia z programu Erasmus+ we Włoszech",
        education3: "Technikum informatyczne w Zespole Szkół nr 2 im. Stanisława Staszica w Nowym Tomyślu - tytuł technika informatyka oraz złotego absolwenta",

        experience1: "Żabka Polska – stażysta w zespole wsparcia IT",
        experience2: "Phoenix Contact – praktyki w dziale IT (programista .NET)",
        experience3: "Międzynarodowe praktyki zawodowe odbyte w ramach projektu europejskiego w Niemczech w placówce „BBS1” (Europass Mobilität)",

        skills1: "Technologie internetowe:",
        skills2: "Programowanie obiektowe:",
        skills3: "Znajomość:",
        skills4: "Angielski:",
        skills5: "Diagnostyka i naprawa zestawu komputerowego, konfigurowanie sieci internetowej",
        skills6: "Prawo jazdy kat. B"

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

        $("#education1").text(language.eng.education1);
        $("#education2").text(language.eng.education2);
        $("#education3").text(language.eng.education3);

        $("#experience1").text(language.eng.experience1);
        $("#experience2").text(language.eng.experience2);
        $("#experience3").text(language.eng.experience3);

        $("#skills1").text(language.eng.skills1);
        $("#skills2").text(language.eng.skills2);
        $("#skills3").text(language.eng.skills3);
        $("#skills4").text(language.eng.skills4);
        $("#skills5").text(language.eng.skills5);
        $("#skills6").text(language.eng.skills6);

    }
}

// reload site on click
dataReload.forEach(reloader => {
    reloader.addEventListener('click', function () {
        location.reload(true);
    })
});


// switch language on flag click
const switchLanguageVisible = () => {
    if (document.querySelector(".pl-language")) {
        if (window.location.hash === "#eng") {
            document.querySelector(".pl-language").style.display = 'inline-block';
            document.querySelector(".eng-language").style.display = 'none';
        } else {
            if (document.querySelector(".eng-language").style.display !== 'inline-block') {
                document.querySelector(".pl-language").style.display = 'none';
                document.querySelector(".eng-language").style.display = 'inline-block';
            }
        }
    }
};

switchLanguageVisible();