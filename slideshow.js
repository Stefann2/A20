var slideIndex = 0;
prikaziSlajdove();

function prikaziSlajdove() {
  var i;
  var kvadrati = document.getElementsByClassName("kvadrat");
  var slajd = document.getElementsByClassName("slajdovi");
  for (i = 0; i < slajd.length; i++) {
    slajd[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slajd.length) {slideIndex = 1}
  slajd[slideIndex-1].style.display = "block";
  for (i = 0; i < kvadrati.length; i++) {
      kvadrati[i].className = kvadrati[i].className.replace(" active", "");
  }
  kvadrati[slideIndex-1].className += " active";
  setTimeout(prikaziSlajdove, 3000); 
}