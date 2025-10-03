const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
});

mobileMenuOverlay.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
});

const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
    });
});