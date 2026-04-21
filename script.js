window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.style.background = '#4e342e';
    navbar.style.position = 'fixed';
    navbar.style.width = '100%';
    navbar.style.top = '0';
    navbar.style.left = '0';
    navbar.style.zIndex = '1000';
    navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.position = 'relative';
    navbar.style.boxShadow = 'none';
  }
});

const cards = document.querySelectorAll('.card, .why-card, .market-card, .testimonial-card, .gallery-grid img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach((card) => {
  card.classList.add('hidden');
  observer.observe(card);
});

const heroTitle = document.querySelector('.hero-content h1');
const heroText = document.querySelector('.hero-content p');
const heroButtons = document.querySelector('.hero-btn');
const menuLinks = document.querySelectorAll('.navbar a');
const form = document.querySelector('form');
const buttons = document.querySelectorAll('.btn');

window.addEventListener('load', () => {
  heroTitle.classList.add('hidden-hero');
  heroText.classList.add('hidden-hero');
  heroButtons.classList.add('hidden-hero');

  setTimeout(() => {
    heroTitle.classList.add('active');
    heroTitle.classList.remove('hidden-hero');
  }, 100);

  setTimeout(() => {
    heroText.classList.add('active');
    heroText.classList.remove('hidden-hero');
  }, 400);

  setTimeout(() => {
    heroButtons.classList.add('active');
    heroButtons.classList.remove('hidden-hero');
  }, 700);
});

menuLinks.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#d7b899';
  });

  link.addEventListener('mouseleave', () => {
    link.style.color = '#fff';
  });

  link.addEventListener('touchstart', () => {
    link.style.color = '#d7b899';
  });

  link.addEventListener('touchend', () => {
    link.style.color = '#fff';
  });
});

buttons.forEach((button) => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.08)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });

  button.addEventListener('touchstart', () => {
    button.style.transform = 'scale(1.08)';
  });

  button.addEventListener('touchend', () => {
    button.style.transform = 'scale(1)';
  });
});

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully.');
    form.reset();
  });
}
