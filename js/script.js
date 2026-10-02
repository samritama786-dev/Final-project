document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!toggleBtn || !mobileMenu) return;

  // Toggle Function
  const toggleMenu = () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';

    // Update Accessibility state
    toggleBtn.setAttribute('aria-expanded', !isExpanded);

    // Toggle menu visibility
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');

    // Swap icons
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  };

  // Close Function
  const closeMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    hamburgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  };

  // Click event on toggle button
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!toggleBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
      closeMenu();
    }
  });

  // Close menu on pressing the Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // Auto-close menu if screen expands past desktop breakpoint (md: 768px)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
});