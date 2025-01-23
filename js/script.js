// script.js 0078 group 02 Adonia Richards 1/23/2025
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  });