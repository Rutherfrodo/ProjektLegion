// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction();
    scrollFunction();
};

// Execute myFunction once when the page is loaded
window.onload = function() {
  myFunction();
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = 100; // Default value: fill width

    // Only if document is scrollable test
    if (height > 0) {
        scrolled = (winScroll / height) * 100;
    }
    document.getElementById("myBar").style.width = scrolled + "%";
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("turbo").style.display = "none";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("turbo").style.display = "block";
  }
}
