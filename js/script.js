
// Animation sur scroll pour faire apparaître les cartes
const cards = document.querySelectorAll('.card');

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('animate__fadeInUp');
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.3,
  }
);

cards.forEach(card => {
  appearOnScroll.observe(card);
});

// Smooth scroll pour les liens internes
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Message console personnalisé
console.log("Bienvenue dans le portfolio de Voltaire Jean Joas !");



// Bascule thème clair/sombre
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
