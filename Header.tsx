import { smoothScrollTo } from './scroll';
import { getLang, setLang } from './i18n';
import { t } from './i18n-data';

const socialLinks = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jaehee-song-happy/' },
    { label: 'Medium', url: 'https://medium.com/@jsong_49820' },
];

export function createHeader(container: HTMLElement): void {
    const ui = t(getLang());
    container.innerHTML = '';

    const navLinks = [
        { label: ui.navAbout, href: '#about' },
        { label: ui.navCareer, href: '#career' },
        { label: ui.navProjects, href: '#projects' },
        { label: ui.navBooks, href: '#books' },
        { label: ui.navLectures, href: '#lectures' },
        { label: ui.navSkills, href: '#skills' },
    ];

    const content = document.createElement('div');
    content.className = 'header-content';

    // Name / logo
    const name = document.createElement('a');
    name.className = 'header-name';
    name.href = '#hero';
    name.textContent = getLang() === 'ko' ? '송재희' : 'Jaehee Song';
    name.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    content.appendChild(name);

    // Desktop nav
    const nav = document.createElement('nav');
    nav.className = 'header-nav';
    nav.setAttribute('aria-label', 'Main navigation');

    // Mobile nav dropdown
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';

    // Mobile hamburger toggle
    const toggle = document.createElement('button');
    toggle.className = 'header-mobile-toggle';
    toggle.setAttribute('aria-label', 'Toggle navigation menu');
    toggle.setAttribute('aria-expanded', 'false');
    for (let i = 0; i < 3; i++) {
        toggle.appendChild(document.createElement('span'));
    }

    navLinks.forEach(link => {
        // Desktop link
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.label;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScrollTo(link.href);
        });
        nav.appendChild(a);

        // Mobile link
        const mobileA = document.createElement('a');
        mobileA.href = link.href;
        mobileA.textContent = link.label;
        mobileA.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScrollTo(link.href);
            mobileNav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
        mobileNav.appendChild(mobileA);
    });
    content.appendChild(nav);

    // Desktop social links + language toggle
    const social = document.createElement('div');
    social.className = 'header-social';
    socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.label;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        social.appendChild(a);
    });

    // Language toggle (desktop)
    const langBtn = document.createElement('button');
    langBtn.className = 'lang-toggle';
    langBtn.setAttribute('aria-label', 'Switch language');
    langBtn.textContent = ui.langToggleLabel;
    langBtn.addEventListener('click', () => {
        setLang(getLang() === 'en' ? 'ko' : 'en');
    });
    social.appendChild(langBtn);

    content.appendChild(social);
    content.appendChild(toggle);
    container.appendChild(content);

    // Mobile social links
    socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.label;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        mobileNav.appendChild(a);
    });

    // Language toggle (mobile)
    const mobileLangBtn = document.createElement('button');
    mobileLangBtn.className = 'lang-toggle';
    mobileLangBtn.setAttribute('aria-label', 'Switch language');
    mobileLangBtn.textContent = ui.langToggleLabel;
    mobileLangBtn.addEventListener('click', () => {
        setLang(getLang() === 'en' ? 'ko' : 'en');
    });
    mobileNav.appendChild(mobileLangBtn);

    container.appendChild(mobileNav);

    // Toggle mobile nav
    toggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });
}
