function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


const togg = document.getElementById("toggleDark");
const light  = document.getElementById("toggleLight");
const body = document.querySelector('body');


togg.addEventListener('click',function(){
    document.body.classList.toggle("dark-theme");
  });

light.addEventListener('click',function(){
    document.body.classList.to("light-theme");
  });