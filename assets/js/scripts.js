document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('active'); // Alterna a classe .active no menu móvel
        hamburgerMenu.classList.toggle('active'); // Alterna a classe .active no botão do hamburguer
    });
});

