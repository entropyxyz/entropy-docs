function toggleFont() {
    var contentElements = document.querySelectorAll('body');
    var preElements = document.querySelectorAll('code');
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
    document.querySelectorAll('body').forEach(function(element) {
        element.style.fontFamily = 'Open-Dyslexic';
    });
    document.querySelectorAll('code').forEach(function(element) {
        element.style.fontFamily = 'Open-Dyslexic-Mono';
    });
    console.log("Switch to Open-Dyslexic and Open-Dyslexic-Mono for pre tags.");
}

function setDefaultFonts() {
    document.querySelectorAll('body').forEach(function(element) {
        element.style.fontFamily = 'sans-serif';
    });
    document.querySelectorAll('code').forEach(function(element) {
        element.style.fontFamily = 'monospace';
    });
    console.log("Switch to sans-serif and monospace for pre tags.");
}

// Apply the saved font setting on page load
document.addEventListener('DOMContentLoaded', function() {
    var savedFont = localStorage.getItem('currentFont');
    if (savedFont === 'dyslexic') {
        setDyslexicFonts();
    } else {
        setDefaultFonts();
    }
});
