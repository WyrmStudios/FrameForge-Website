// Screenshot tab switcher
document.querySelectorAll('.stab').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    document.querySelectorAll('.stab').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.stab-panel').forEach((p) => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(target)?.classList.add('active');
  });
});

// Highlight the active sidebar link based on which section is in view
const sections = document.querySelectorAll('section[id]');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

if (sections.length && sidebarLinks.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sidebarLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: '-15% 0px -70% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}
