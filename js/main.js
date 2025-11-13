// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (!toggle || !navList) return;

  // Toggle menu
  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    toggle.textContent = isOpen ? 'Close' : 'Menu';
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close when clicking a link
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      toggle.textContent = 'Menu';
      toggle.setAttribute('aria-expanded', false);
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove('open');
      toggle.textContent = 'Menu';
    }
  });
});