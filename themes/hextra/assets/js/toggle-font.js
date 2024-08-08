function toggleFont() {
    console.log("ToggleFont function hit!");
    var currentFont = document.body.style.fontFamily;

    if (currentFont.includes('serif')) {
      document.body.style.fontFamily = 'sans-serif'; // Example sans-serif font
    } else {
      document.body.style.fontFamily = 'serif'; // Example serif font
    }
}
