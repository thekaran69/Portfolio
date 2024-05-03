function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


var slider = document.querySelector("slider");

slider.onclick = function(){
    document.body.classList.toggle("dark-theme");
  }