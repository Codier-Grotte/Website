window.onscroll = function() {scrollFunction()};        /* If you scroll down, below function will be executed*/

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {    /* If you scroll down more than 80 pixels, the settings below will be executed,
                                                                                        if below 80 pixels scrolling down is not reached, just stays the same */
    document.getElementById("navbar").style.fontSize = "20px";
    document.getElementById("logo").style.fontSize = "20px";
  } else {
    document.getElementById("navbar").style.fontSize = "30px";
    document.getElementById("logo").style.fontSize = "30px";
  }
} 
