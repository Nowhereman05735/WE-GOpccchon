const toggleButton = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});