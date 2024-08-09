function toggleFont() {
    var contentElements = document.querySelectorAll('body');
    var preElements = document.querySelectorAll('pre');
    var currentFont = window.getComputedStyle(contentElements[0]).fontFamily;

    if (!currentFont.includes('Open-Dyslexic')) {
        contentElements.forEach(function(element) {
            element.style.fontFamily = 'Open-Dyslexic';
        });
        preElements.forEach(function(element) {
            element.style.fontFamily = 'Open-Dyslexic-Mono';
        });
        console.log("Switch to Open-Dyslexic and Open-Dyslexic-Mono for pre tags.");
    } else {
        contentElements.forEach(function(element) {
            element.style.fontFamily = 'sans-serif';
        });
        preElements.forEach(function(element) {
            element.style.fontFamily = 'monospace';
        });
        console.log("Switch to sans-serif and monospace for pre tags.");
    }
}
