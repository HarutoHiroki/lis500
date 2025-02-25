// nav bar
setInterval(function threeBar(){
  if (document.body.offsetWidth > 510) {
    document.getElementById("navdrop").style.display = "none";
    document.getElementById("bar1").style.display = "initial";
    document.getElementById("bar2").style.display = "initial";
    document.getElementById("bar3").style.display = "initial";
    document.getElementById("bar4").style.display = "initial";
    document.getElementById("br").style.display = "initial";
  } else {
    document.getElementById("navdrop").style.display = "initial";
    document.getElementById("bar1").style.display = "none";
    document.getElementById("bar2").style.display = "none";
    document.getElementById("bar3").style.display = "none";
    document.getElementById("bar4").style.display = "none";
    document.getElementById("br").style.display = "none";
  }
}, 69);

window.addEventListener("load",(
  function(){
    var e=document.getElementsByClassName("nav-bar");
    //DOG5lZIzFtosGuQ5jd==
    if(e.length){
      var n=e[0],l=n.querySelector(".nav-bars"),b=n.querySelector(".nav-close-btn"),t=n.querySelector(".dropdown-content");
      l&&l.addEventListener("click",() => {
        l.style.display = "none"; 
        b.style.display = "block";
        t.style.display = "block";
      }),
      b&&b.addEventListener("click",() => {
        b.style.display = "none"; 
        t.style.display = "none";
        l.style.display = "block"; 
      });
    }
  }
));