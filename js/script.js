/**
 * Homestead Roots – Cloud Kitchen Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '918076686588';

  // --- Sticky Navigation & Active Link Highlight ---
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    // Add scrolled class for shadow
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy active link detection
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // --- Mobile Hamburger Navigation ---
  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinksContainer.classList.toggle('open');
    });

    // Close mobile menu on link click
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinksContainer.classList.remove('open');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove('open');
        navLinksContainer.classList.remove('open');
      }
    });
  }

  // --- Interactive Menu Category Tabs ---
  const menuTabs = document.querySelectorAll('.menu-tab');
  const menuGrids = document.querySelectorAll('.menu-grid');

  menuTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Remove active from all tabs
      menuTabs.forEach((t) => t.classList.remove('active'));
      // Add active to clicked tab
      tab.classList.add('active');

      const targetCategory = tab.getAttribute('data-category');

      // Hide all grids
      menuGrids.forEach((grid) => {
        grid.classList.remove('active');
      });

      // Show target grid
      const targetGrid = document.getElementById(targetCategory);
      if (targetGrid) {
        targetGrid.classList.add('active');
        
        // Re-trigger animation on newly displayed cards
        const cards = targetGrid.querySelectorAll('.menu-card');
        cards.forEach((card, index) => {
          card.classList.remove('animated');
          setTimeout(() => {
            card.classList.add('animated');
          }, index * 60);
        });
      }
    });
  });

  // --- Dynamic WhatsApp Order Links for Menu Cards ---
  const orderButtons = document.querySelectorAll('.menu-order-btn, .cake-btn, .cake-mini-btn');
  orderButtons.forEach((btn) => {
    // Find dish name in parent card
    const card = btn.closest('.menu-card, .cake-hero-card, .cake-mini-card');
    if (card) {
      const heading = card.querySelector('h3, h4');
      if (heading) {
        const itemName = heading.textContent.trim();
        const customUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `Hi Homestead Roots! I would like to order: ${itemName}. Please share details.`
        )}`;
        btn.setAttribute('href', customUrl);
        btn.setAttribute('target', '_blank');
      }
    }
  });

  // --- Bakery Chips WhatsApp Click ---
  const bakeryChips = document.querySelectorAll('.bakery-chip');
  bakeryChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const itemName = chip.textContent.trim();
      const customUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hi Homestead Roots! I would like to enquire about: ${itemName}.`
      )}`;
      window.open(customUrl, '_blank');
    });
  });

  // --- Desserts Card WhatsApp Click ---
  const dessertCards = document.querySelectorAll('.dessert-card');
  dessertCards.forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const heading = card.querySelector('h3');
      if (heading) {
        const dessertName = heading.textContent.trim();
        const customUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `Hi Homestead Roots! I want to order dessert: ${dessertName}.`
        )}`;
        window.open(customUrl, '_blank');
      }
    });
  });

  // --- Intersection Observer for Scroll Animations (AOS replacement) ---
  const animatedElements = document.querySelectorAll('[data-aos]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    animatedElements.forEach((el) => el.classList.add('animated'));
  }
});
