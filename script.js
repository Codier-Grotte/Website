window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.fontSize = "20px";
    document.getElementById("logo").style.fontSize = "20px";
  } else {
    document.getElementById("navbar").style.fontSize = "30px";
    document.getElementById("logo").style.fontSize = "30px";
  }
} 