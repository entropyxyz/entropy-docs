var contentElements = document.querySelectorAll('body');
var preElements = document.querySelectorAll('pre');

function toggleFont() {
    var currentFont = localStorage.getItem('currentFont') || 'default';

    if (currentFont === 'default') {
        setDyslexicFonts();
        localStorage.setItem('currentFont', 'dyslexic');
    } else {
        setDefaultFonts();
        localStorage.setItem('currentFont', 'default');
    }
}

function setDyslexicFonts() {
    contentElements.forEach(function(element) {
        element.style.fontFamily = 'Open-Dyslexic';
    });
    preElements.forEach(function(element) {
        element.style.fontFamily = 'Open-Dyslexic-Mono';
    });
    console.log("Switch to Open-Dyslexic and Open-Dyslexic-Mono for pre tags.");
}

function setDefaultFonts() {
    contentElements.forEach(function(element) {
        element.style.fontFamily = 'sans-serif';
    });
    preElements.forEach(function(element) {
        element.style.fontFamily = 'monospace';
    });
    console.log("Switch to sans-serif and monospace for pre tags.");
}

document.addEventListener('DOMContentLoaded', function() {
    var savedFont = localStorage.getItem('currentFont');
    if (savedFont === 'dyslexic') {
        setDyslexicFonts();
    } else {
        setDefaultFonts();
    }
});
