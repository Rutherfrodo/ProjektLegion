function menugry() {
  document.getElementById("menugry").style.display = "block";
  document.getElementById("dyplomacja").style.display = "none";
  document.getElementById("produkcja").style.display = "none";
  document.getElementById("sklad").style.display = "none";
  document.getElementById("technologie").style.display = "none";
  document.getElementById("walka").style.display = "none";
  window.scrollBy(0, -1 * window.pageYOffset ); //scroll do gory po zmianie karty
}

function dyplomacja() {
  document.getElementById("dyplomacja").style.display = "block";
  document.getElementById("menugry").style.display = "none";
  document.getElementById("produkcja").style.display = "none";
  document.getElementById("sklad").style.display = "none";
  document.getElementById("technologie").style.display = "none";
  document.getElementById("walka").style.display = "none";
  window.scrollBy(0, -1 * window.pageYOffset );
}
function produkcja() {
  document.getElementById("produkcja").style.display = "block";
  document.getElementById("menugry").style.display = "none";
  document.getElementById("dyplomacja").style.display = "none";
  document.getElementById("sklad").style.display = "none";
  document.getElementById("technologie").style.display = "none";
  document.getElementById("walka").style.display = "none";
  window.scrollBy(0, -1 * window.pageYOffset );
}
function sklad() {
  document.getElementById("sklad").style.display = "block";
  document.getElementById("menugry").style.display = "none";
  document.getElementById("dyplomacja").style.display = "none";
  document.getElementById("produkcja").style.display = "none";
  document.getElementById("technologie").style.display = "none";
  document.getElementById("walka").style.display = "none";
  window.scrollBy(0, -1 * window.pageYOffset );
}
function technologie() {
  document.getElementById("technologie").style.display = "block";
  document.getElementById("menugry").style.display = "none";
  document.getElementById("dyplomacja").style.display = "none";
  document.getElementById("produkcja").style.display = "none";
  document.getElementById("sklad").style.display = "none";
  document.getElementById("walka").style.display = "none";
  window.scrollBy(0, -1 * window.pageYOffset );
}
function walka() {
  document.getElementById("walka").style.display = "block";
  document.getElementById("menugry").style.display = "none";
  document.getElementById("dyplomacja").style.display = "none";
  document.getElementById("produkcja").style.display = "none";
  document.getElementById("sklad").style.display = "none";
  document.getElementById("technologie").style.display = "none";
  window.scrollBy(0, -1 * window.pageYOffset );
}
