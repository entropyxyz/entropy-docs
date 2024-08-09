function toggleFont() {
    var contentElements = document.querySelectorAll('.content');
    var currentFont = window.getComputedStyle(contentElements[0]).fontFamily;

    if (!currentFont.includes('Open-Dyslexic')) {
        contentElements.forEach(function(element) {
            element.style.fontFamily = 'Open-Dyslexic';
        });
        console.log("Switch to Open-Dyslexic.");
    } else {
        contentElements.forEach(function(element) {
            element.style.fontFamily = 'sans-serif';
        });
        console.log("Switch to sans-serif.");
    }
}
