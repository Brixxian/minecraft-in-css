
function vollbild() {
  if (document.getElementById("myVideo").requestFullscreen) {
    document.getElementById("myVideo").requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    document.getElementById("myVideo").webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    document.getElementById("myVideo").msRequestFullscreen();
  }
  document.getElementById("body").style.cursor = "none";
  document.getElementById("myVideo").play()
}
