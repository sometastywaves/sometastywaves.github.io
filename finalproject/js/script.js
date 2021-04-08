function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }
  
  function Yearjs() {
    var n = new Date()
    var y = n.getFullYear();
    document.getElementById("year").innerHTML = y
  }
  Yearjs();
  document.getElementById("timework").innerHTML = document.lastModified;

 