// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');

const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Animate once
    }
  });
}, {
  threshold: 0.1
});

faders.forEach(el => fadeInOnScroll.observe(el));

// Back to top button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
