var mybtn = document.getElementById("btn");
var modal = document.getElementById("BG-modal");
var span2 = document.getElementsByClassName("close")[0];

mybtn.onclick = function() {
 modal.style.display = "block";
}
span2.onclick = function() {
 modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
     modal.style.display = "none";
  }
}
