function menugry() {
  document.getElementById("menugry").style.display = "block";
  document.getElementById("dyplomacja").style.display = "none";
  document.getElementById("produkcja").style.display = "none";
}

function dyplomacja() {
  document.getElementById("dyplomacja").style.display = "block";
  document.getElementById("menugry").style.display = "none";
  document.getElementById("produkcja").style.display = "none";
}
function produkcja() {
  document.getElementById("produkcja").style.display = "block";
  document.getElementById("dyplomacja").style.display = "none";
  document.getElementById("menugry").style.display = "none";

}