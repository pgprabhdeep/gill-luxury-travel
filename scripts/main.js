/* Main site JavaScript */
AOS.init({ duration: 900, once: true });

// mobile navigation
const navToggle = document.getElementById('navToggle');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const closeMobileNavBtn = document.getElementById('closeMobileNav');
navToggle.addEventListener('click', () => mobileNavOverlay.style.display = 'block');
function closeMobileNav(){ mobileNavOverlay.style.display = 'none'; }
window.closeMobileNav = closeMobileNav;
closeMobileNavBtn.addEventListener('click', closeMobileNav);

// gallery lightbox
window.openLightbox = src => {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
};

// testimonials slider
$(function(){
  $('.testimonial-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4500,
    adaptiveHeight: true
  });
});

// parallax effect for hero background
window.addEventListener('scroll', () => {
  const offset = window.pageYOffset;
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    heroBg.style.transform = `translateY(${offset * 0.3}px)`;
  }
});
