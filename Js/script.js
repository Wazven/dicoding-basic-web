let mybutton = document.getElementById("topbtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  topbtn.addEventListener('click', topFunction);

  function myFunction1(){
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick=function(event){
    if(!event.target.matches('.button-nav')){
      var dropdowns = document.getElementsByClassName("dropdown-content")
      var i;
      for (i = 0; i<dropdowns.length; i++){
        var openDropdown = dropdowns [i];
        if (openDropdown.classList.contains('show')){
          openDropdown.classList.remove('show');
        }
      }
    }
  }