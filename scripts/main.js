// Main JavaScript for Gill Luxury Travel
// Implements parallax effect for hero section and other interactions

document.addEventListener('DOMContentLoaded', () => {
  const heroBg = document.querySelector('.hero-bg');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;

  if (heroBg && !prefersReduced && isDesktop) {
    heroBg.style.transform = 'translateY(0)';
    heroBg.style.willChange = 'transform';

    let latestScroll = 0;
    let ticking = false;
    const speed = 0.3;

    const update = () => {
      heroBg.style.transform = `translateY(${-latestScroll * speed}px)`;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      latestScroll = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    });
  }
});

