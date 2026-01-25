// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Scroll Reveal Effect
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// 1. Copy to Clipboard Functionality
function copyToClipboard(text) {
    // navigator.clipboard is the modern Senior Dev way to handle this
    navigator.clipboard.writeText(text).then(() => {
        // Find the button that was clicked
        const btn = event.target;
        const originalText = btn.innerText;
        
        // Provide visual feedback
        btn.innerText = "Copied!";
        btn.style.backgroundColor = "#28a745"; // Success Green
        
        // Reset button after 2 seconds
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = ""; // Resets to CSS variable color
        }, 2000);
    }).catch(err => {
        console.error('Action failed: ', err);
    });
}

// 2. Smooth Scroll for "Back to Top" and Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 3. Optional: Scroll-to-Top Button Visibility
// If you want the "Back to Top" link to only appear after scrolling down
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTop.style.opacity = "1";
    } else {
        backToTop.style.opacity = "0.5";
    }
});

// Add this to your script.js to highlight the current section in the nav
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section, header');
    const navItems = document.querySelectorAll('.nav-links li a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active-link');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active-link');
        }
    });
});


const textElement = document.getElementById('typewriter');

// Phrases that showcase your multi-stack focus
const phrases = [
    "Data Analyst.",
    "Full-Stack Web Developer.",
    "Python Programmer.",
    "Cybersecurity Enthusiast.",
    "Javascript Developer.",
    "Nobel Leadership Fellow."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Deleting text
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; 
    } else {
        // Typing text
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

    // Determine when to switch states
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at the end of the phrase
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        // Move to the next phrase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', typeEffect);