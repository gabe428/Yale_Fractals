// POPUP WINDOW CONTROLS
defaultStatus = 'Loading CourseWare'
function poploadsplash() {
  wide = 250
  high = 150
  px = (800 - wide) / 2
  py = (600 - high) / 2
  if (screen) {
    px = (screen.width - wide) / 2
    py = (screen.height - high) / 2
  }
  popup = window.open('images/loadsplash.html','Loading','width='+ wide + ',height=' + high +',screenX=' + px + ',screenY=' + py);
  popup.focus();
}

poploadsplash();

function reallyClose() {
  popup.close();
}

function closeWin() {
  setTimeout("reallyClose()", 1500);
}