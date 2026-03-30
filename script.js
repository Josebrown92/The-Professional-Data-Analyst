// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const targetElement = document.querySelector(href);
        
        // Only prevent default if target element exists
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize all sections to visible state
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '1';
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
// Back to Top Button Visibility - Only if element exists
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.style.opacity = "1";
        } else {
            backToTop.style.opacity = "0.5";
        }
    });
}

// Add this to your script.js to highlight the current section in the nav
// (Disabled to prevent carousel interference)
// window.addEventListener('scroll', () => {
//     let current = '';
//     const sections = document.querySelectorAll('section, header');
//     const navItems = document.querySelectorAll('.nav-links li a');
//
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         if (pageYOffset >= sectionTop - 60) {
//             current = section.getAttribute('id');
//         }
//     });
//
//     navItems.forEach(item => {
//         item.classList.remove('active-link');
//         if (item.getAttribute('href').includes(current)) {
//             item.classList.add('active-link');
//         }
//     });
// });



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
    // Only run if the typewriter element exists
    if (!textElement) return;
    
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

document.addEventListener('DOMContentLoaded', () => {
    // Only run typeEffect if the typewriter element exists
    const textElement = document.getElementById('typewriter');
    if (textElement) {
        typeEffect();
    }

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navLinks.classList.toggle('show');
        });

        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Modal Functionality
    const modalButtons = document.querySelectorAll('.btn-view-details');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Open modal
    modalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = 'auto';
        }
    });
});