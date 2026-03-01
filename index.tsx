import { createHeader } from './Header';
import { createFooter } from './Footer';
import { getLang, onLangChange } from './i18n';
import { setupScrollBehavior } from './scroll';
import {
    renderHero,
    renderAbout,
    renderCareer,
    renderProjects,
    renderBooks,
    renderLectures,
    renderPrograms,
    renderSkills,
    renderEducation
} from './sections';

const sectionIds = ['hero', 'about', 'career', 'projects', 'books', 'lectures', 'programs', 'skills', 'education'];

function renderAll(): void {
    // Clear all section contents
    sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = '';
            el.classList.remove('fade-in-section', 'is-visible');
        }
    });

    // Re-render header
    const header = document.getElementById('app-header-placeholder');
    if (header) createHeader(header);

    // Re-render all sections
    renderHero(document.getElementById('hero')!);
    renderAbout(document.getElementById('about')!);
    renderCareer(document.getElementById('career')!);
    renderProjects(document.getElementById('projects')!);
    renderBooks(document.getElementById('books')!);
    renderLectures(document.getElementById('lectures')!);
    renderPrograms(document.getElementById('programs')!);
    renderSkills(document.getElementById('skills')!);
    renderEducation(document.getElementById('education')!);

    // Re-render footer
    const footer = document.getElementById('app-footer-placeholder');
    if (footer) createFooter(footer);

    // Re-setup scroll behavior (observers need new elements)
    setupScrollBehavior();
}

document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = getLang();
    onLangChange(renderAll);
    renderAll();
});
