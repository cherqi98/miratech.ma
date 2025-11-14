document.addEventListener('DOMContentLoaded', () => {
  const toggle   = document.querySelector('.nav-toggle');
  const navList  = document.querySelector('.nav-list');

  if (!toggle || !navList) return;

  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');

    // 1. Change button text
    toggle.textContent = isOpen ? 'Close' : 'Menu';
    toggle.setAttribute('aria-expanded', isOpen);

    // 2. Add/remove .menu-open on <body>
    document.body.classList.toggle('menu-open', isOpen);
  });

  // Close when a link is clicked
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      toggle.textContent = 'Menu';
      toggle.setAttribute('aria-expanded', false);
      document.body.classList.remove('menu-open');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove('open');
      toggle.textContent = 'Menu';
      document.body.classList.remove('menu-open');
    }
  });
});

document.querySelectorAll('a[href*="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Only handle same-page # links
    if (href.includes('#') && !href.startsWith('http')) {
      const targetId = href.split('#')[1];
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();

        // 1. Close mobile menu instantly
        const navList = document.querySelector('.nav-list');
        const toggle = document.querySelector('.nav-toggle');
        if (navList && toggle) {
          navList.classList.remove('open');
          toggle.textContent = 'Menu';
          document.body.classList.remove('menu-open');
        }

        // 2. Wait for menu to close (350ms matches CSS transition)
        setTimeout(() => {
          const headerHeight = 80; // adjust if your header is taller
          const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }, 380); // 350ms + 30ms buffer
      }
    }
  });
});