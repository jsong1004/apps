import { getPortfolioData } from './data';
import { getLang } from './i18n';
import { t } from './i18n-data';

function createWrapper(): HTMLDivElement {
    const wrapper = document.createElement('div');
    wrapper.className = 'section-wrapper';
    return wrapper;
}

function createHeading(text: string): HTMLHeadingElement {
    const heading = document.createElement('h2');
    heading.className = 'section-heading';
    heading.textContent = text;
    return heading;
}

export function renderHero(container: HTMLElement): void {
    const data = getPortfolioData(getLang());
    const ui = t(getLang());
    const wrapper = createWrapper();

    const name = document.createElement('h1');
    name.className = 'hero-name';
    name.textContent = data.name;
    wrapper.appendChild(name);

    const titles = document.createElement('p');
    titles.className = 'hero-titles';
    titles.innerHTML = data.titles
        .map(title => `<span class="hero-title-pill">${title}</span>`)
        .join('');
    wrapper.appendChild(titles);

    const summary = document.createElement('p');
    summary.className = 'hero-summary';
    summary.textContent = data.summary;
    wrapper.appendChild(summary);

    const actions = document.createElement('div');
    actions.className = 'hero-actions';
    actions.innerHTML = `
        <a href="${data.social[0].url}" target="_blank" rel="noopener noreferrer" class="btn-primary">${ui.btnLinkedIn}</a>
        <a href="mailto:${data.contact.email}" class="btn-secondary">${ui.btnGetInTouch}</a>
    `;
    wrapper.appendChild(actions);

    container.appendChild(wrapper);
}

export function renderAbout(container: HTMLElement): void {
    const data = getPortfolioData(getLang());
    const ui = t(getLang());
    container.classList.add('fade-in-section');
    const wrapper = createWrapper();

    wrapper.appendChild(createHeading(ui.headingAbout));

    const layout = document.createElement('div');
    layout.className = 'about-layout';

    const textCol = document.createElement('div');
    textCol.className = 'about-text';
    data.aboutText.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        textCol.appendChild(p);
    });
    layout.appendChild(textCol);

    const statsCol = document.createElement('div');
    statsCol.className = 'about-stats';
    data.stats.forEach(stat => {
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.innerHTML = `
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        `;
        statsCol.appendChild(card);
    });
    layout.appendChild(statsCol);

    wrapper.appendChild(layout);
    container.appendChild(wrapper);
}

export function renderCareer(container: HTMLElement): void {
    const data = getPortfolioData(getLang());
    const ui = t(getLang());
    container.classList.add('fade-in-section');
    const wrapper = createWrapper();

    wrapper.appendChild(createHeading(ui.headingCareer));

    const timeline = document.createElement('div');
    timeline.className = 'timeline';

    data.career.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        const dot = document.createElement('div');
        dot.className = 'timeline-dot';
        item.appendChild(dot);

        const content = document.createElement('div');
        content.className = 'timeline-content';

        const header = document.createElement('div');
        header.className = 'timeline-header';
        header.innerHTML = `
            <h3 class="timeline-company">${entry.company}</h3>
            <span class="timeline-period">${entry.period}</span>
        `;
        content.appendChild(header);

        const role = document.createElement('p');
        role.className = 'timeline-role';
        role.textContent = `${entry.role} \u00B7 ${entry.location}`;
        content.appendChild(role);

        const desc = document.createElement('p');
        desc.className = 'timeline-desc';
        desc.textContent = entry.description;
        content.appendChild(desc);

        if (entry.highlights.length > 0) {
            const list = document.createElement('ul');
            list.className = 'timeline-highlights';
            entry.highlights.forEach(h => {
                const li = document.createElement('li');
                li.textContent = h;
                list.appendChild(li);
            });
            content.appendChild(list);
        }

        item.appendChild(content);
        timeline.appendChild(item);
    });

    wrapper.appendChild(timeline);
    container.appendChild(wrapper);
}

export function renderProjects(container: HTMLElement): void {
    const data = getPortfolioData(getLang());
    const ui = t(getLang());
    container.classList.add('fade-in-section');
    const wrapper = createWrapper();

    wrapper.appendChild(createHeading(ui.headingProjects));

    const subtitle = document.createElement('p');
    subtitle.className = 'section-subtitle';
    subtitle.textContent = ui.projectsSubtitle;
    wrapper.appendChild(subtitle);

    const grid = document.createElement('div');
    grid.className = 'projects-grid';

    const iconMap: { [key: string]: string } = {
        'productivity': '\u23F1\uFE0F',
        'job-search': '\uD83D\uDCBC',
        'insights': '\uD83D\uDD0D',
        'creativity': '\u2728',
        'investment': '\uD83D\uDCCA',
        'workshop': '\uD83C\uDF93',
        'utilities': '\uD83D\uDD27',
        'marketing': '\uD83D\uDCE3'
    };

    const categoryMap: { [key: string]: string } = {
        'ai': ui.categoryAI,
        'business': ui.categoryBusiness,
        'utility': ui.categoryUtilities
    };

    data.tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'project-card';

        card.innerHTML = `
            <div class="project-header">
                <span class="project-icon">${iconMap[tool.icon] || '\uD83D\uDE80'}</span>
                <span class="project-category">${categoryMap[tool.category] || tool.category}</span>
            </div>
            <h3 class="project-title">${tool.title}</h3>
            <p class="project-desc">${tool.description}</p>
            <a href="https://${tool.webSite}" target="_blank" rel="noopener noreferrer" class="project-link">
                ${ui.btnVisit} <span aria-hidden="true">\u2192</span>
            </a>
        `;

        grid.appendChild(card);
    });

    wrapper.appendChild(grid);
    container.appendChild(wrapper);
}

export function renderBooks(container: HTMLElement): void {
    const data = getPortfolioData(getLang());
    const ui = t(getLang());
    container.classList.add('fade-in-section');
    const wrapper = createWrapper();

    wrapper.appendChild(createHeading(ui.headingBooks));

    const grid = document.createElement('div');
    grid.className = 'books-grid';

    data.books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';

        const titleHtml = book.titleKo
            ? `<h3 class="book-title">${book.title}</h3><p class="book-title-ko">${book.titleKo}</p>`
            : `<h3 class="book-title">${book.title}</h3>`;

        const linksHtml = book.links
            .map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="book-link">${link.label}</a>`)
            .join('');

        card.innerHTML = `
            <div class="book-icon">\uD83D\uDCD6</div>
            ${titleHtml}
            <p class="book-desc">${book.description}</p>
            <div class="book-links">${linksHtml}</div>
        `;

        grid.appendChild(card);
    });

    wrapper.appendChild(grid);
    container.appendChild(wrapper);
}

export function renderLectures(container: HTMLElement): void {
    const data = getPortfolioData(getLang());
    const ui = t(getLang());
    container.classList.add('fade-in-section');
    const wrapper = createWrapper();

    wrapper.appendChild(createHeading(ui.headingLectures));

    const list = document.createElement('div');
    list.className = 'lectures-list';

    data.lectures.forEach(lecture => {
        const item = document.createElement('div');
        item.className = 'lecture-item';
        item.innerHTML = `
            <div class="lecture-year">${lecture.year}</div>
            <div class="lecture-content">
                <span class="lecture-venue">${lecture.venue}</span>
                <span class="lecture-topic">${lecture.topic}</span>
            </div>
        `;
        list.appendChild(item);
    });

    wrapper.appendChild(list);
    container.appendChild(wrapper);
}

export function renderPrograms(container: HTMLElement): void {
    const data = getPortfolioData(getLang());
    const ui = t(getLang());
    container.classList.add('fade-in-section');
    const wrapper = createWrapper();

    wrapper.appendChild(createHeading(ui.headingPrograms));

    const intro = document.createElement('p');
    intro.className = 'section-subtitle';
    intro.textContent = ui.programsSubtitle;
    wrapper.appendChild(intro);

    const grid = document.createElement('div');
    grid.className = 'programs-grid';

    data.programs.forEach(program => {
        const card = document.createElement('div');
        card.className = 'program-card';
        card.innerHTML = `
            <h3 class="program-name">${program.name}</h3>
            <p class="program-period">${program.period}</p>
            <p class="program-partner">${program.partner}</p>
        `;
        grid.appendChild(card);
    });

    wrapper.appendChild(grid);
    container.appendChild(wrapper);
}

export function renderSkills(container: HTMLElement): void {
    const data = getPortfolioData(getLang());
    const ui = t(getLang());
    container.classList.add('fade-in-section');
    const wrapper = createWrapper();

    wrapper.appendChild(createHeading(ui.headingSkills));

    const grid = document.createElement('div');
    grid.className = 'skills-grid';

    data.skills.forEach(category => {
        const card = document.createElement('div');
        card.className = 'skill-card';

        const title = document.createElement('h3');
        title.className = 'skill-category';
        title.textContent = category.name;
        card.appendChild(title);

        const pills = document.createElement('div');
        pills.className = 'skill-pills';
        category.skills.forEach(skill => {
            const pill = document.createElement('span');
            pill.className = 'skill-pill';
            pill.textContent = skill;
            pills.appendChild(pill);
        });
        card.appendChild(pills);

        grid.appendChild(card);
    });

    wrapper.appendChild(grid);
    container.appendChild(wrapper);
}

export function renderEducation(container: HTMLElement): void {
    const data = getPortfolioData(getLang());
    const ui = t(getLang());
    container.classList.add('fade-in-section');
    const wrapper = createWrapper();

    wrapper.appendChild(createHeading(ui.headingEducation));

    const grid = document.createElement('div');
    grid.className = 'education-grid';

    data.education.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'education-card';
        card.innerHTML = `
            <h3 class="edu-institution">${edu.institution}</h3>
            <p class="edu-degree">${edu.degree} \u00B7 ${edu.field}</p>
        `;
        grid.appendChild(card);
    });

    wrapper.appendChild(grid);
    container.appendChild(wrapper);
}
