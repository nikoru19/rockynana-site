// ------------------------
// Hero Image Subtle Float + Rotate
// ------------------------
const heroImage = document.querySelector('.hero-image img');
if (heroImage) {
  let angle = 0;
  setInterval(() => {
    angle += 0.015;
    heroImage.style.transform = `translateY(${Math.sin(angle)*6}px) rotateZ(${Math.sin(angle)*1}deg)`;
  }, 20);
}

// ------------------------
// Rotating Quotes
// ------------------------
const quotes = document.querySelectorAll('#philosophy blockquote');
let currentQuote = 0;

if (quotes.length > 0) {
  quotes.forEach((q,i)=>{if(i!==0) q.style.display='none';});
  setInterval(() => {
    quotes[currentQuote].style.opacity = 0;
    setTimeout(() => {
      quotes[currentQuote].style.display = 'none';
      currentQuote = (currentQuote+1) % quotes.length;
      quotes[currentQuote].style.display = 'block';
      quotes[currentQuote].style.opacity = 1;
    }, 500);
  }, 5000);
}

// ------------------------
// Section Fade-in on Scroll
// ------------------------
const faders = document.querySelectorAll('section');
const observerOptions = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

faders.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.8s ease-out';
  appearOnScroll.observe(section);
});

// ------------------------
// Newsletter Form Validation
// ------------------------
const newsletterForm = document.querySelector('#newsletter form');
if(newsletterForm){
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if(emailInput.value.trim() === ''){
      alert('Please enter your email address!');
      emailInput.focus();
    } else {
      alert('Thanks for subscribing! Rocky Nana will keep you updated.');
      newsletterForm.reset();
    }
  });
}
