console.log('custom.js has been hit.');

function switch_fonts() {
  console.log('switch_fonts hit.');

  const body = document.body;
  const currentFont = window.getComputedStyle(body).fontFamily;

  if (currentFont.includes("Arial") || currentFont.includes("Helvetica") || currentFont.includes("sans-serif")) {
    body.style.fontFamily = "opendyslexic";
  } else if (currentFont.includes("opendyslexic")) {
    body.style.fontFamily = "Arial, Helvetica, sans-serif";
  }
}
