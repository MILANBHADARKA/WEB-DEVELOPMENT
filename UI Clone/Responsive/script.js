let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navlist = document.querySelector('.navlist');
let rightnav = document.querySelector('.rightnav');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-h');
    navbar.classList.toggle('nav-h-res');
    navlist.classList.toggle('nav-v-res');
    rightnav.classList.toggle('nav-v-res');
});