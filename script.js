document.addEventListener('DOMContentLoaded', () => {
  // Typing Effect
  function typeElement(el, speed = 40) {
    const fullHTML = el.innerHTML;
    const text = el.textContent;
    el.textContent = '';
    let i = 0;

    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i++);
        setTimeout(type, speed);
      } else {
        el.innerHTML = fullHTML;
      }
    }
    type();
  }

  typeElement(document.getElementById('typeText'));
  typeElement(document.getElementById('typeText2'), 55);

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // Form Submit
  window.handleFormSubmit = function (event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    event.target.reset();
  };

  // Dynamic Year
  const footerText = document.querySelector('footer p');
  if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace(
      '2026',
      new Date().getFullYear()
    );
  }

  console.log('Portfolio loaded cleanly 🚀');
});
const particlesContainer = document.getElementById('particles-container');
const particleCount = 80;

// Create particles
for (let i = 0; i < particleCount; i++) {
    createParticle();
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.position = 'absolute';
    particle.style.borderRadius = '50%';
    particle.style.background = 'white';
    particle.style.opacity = '0';

    resetParticle(particle);
    particlesContainer.appendChild(particle);
    animateParticle(particle);
}

function resetParticle(particle) {
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = '0';
    return { x: posX, y: posY };
}

function animateParticle(particle) {
    const pos = resetParticle(particle);
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;

    setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        setTimeout(() => animateParticle(particle), duration * 1000);
    }, delay * 1000);
}

// Mouse interaction
document.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;

    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.position = 'absolute';
    particle.style.borderRadius = '50%';
    particle.style.background = 'white';
    particle.style.opacity = '0.6';
    particle.style.left = `${mouseX}%`;
    particle.style.top = `${mouseY}%`;
    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';

        setTimeout(() => particle.remove(), 2000);
    }, 10);
});