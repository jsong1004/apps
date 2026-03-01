let fadeObserver: IntersectionObserver | null = null;
let navObserver: IntersectionObserver | null = null;
let scrollListenerAttached = false;

export function setupScrollBehavior(): void {
    const header = document.getElementById('app-header-placeholder');
    if (!header) return;

    // Disconnect existing observers before creating new ones
    if (fadeObserver) fadeObserver.disconnect();
    if (navObserver) navObserver.disconnect();

    // Header shadow on scroll (attach only once)
    if (!scrollListenerAttached) {
        scrollListenerAttached = true;
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    header.classList.toggle('has-shadow', window.scrollY > 10);
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Fade-in sections on scroll
    fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(el => {
        fadeObserver!.observe(el);
    });

    // Active nav link highlighting
    const navLinks = document.querySelectorAll('.header-nav a');
    const sections = document.querySelectorAll('main > section[id]');

    navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: `-${header.offsetHeight + 20}px 0px -50% 0px`
    });

    sections.forEach(section => navObserver!.observe(section));
}

export function smoothScrollTo(targetId: string): void {
    const header = document.getElementById('app-header-placeholder');
    const target = document.querySelector(targetId);
    if (!target || !header) return;

    const offset = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight - 16;
    window.scrollTo({ top: offset, behavior: 'smooth' });
}
