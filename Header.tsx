export function createHeader(container: HTMLElement): void {
    container.innerHTML = ''; // Clear any existing content

    const headerContent = document.createElement('div');
    headerContent.className = 'header-content';

    // Site Title / Logo
    const titleDiv = document.createElement('div');
    titleDiv.className = 'header-title';
    const titleLink = document.createElement('a');
    titleLink.href = "/"; // Link to homepage or root
    titleLink.textContent = 'AI Business Tools Showcase';
    titleDiv.appendChild(titleLink);

    // Social Media Links
    const socialLinksDiv = document.createElement('div');
    socialLinksDiv.className = 'header-social-links';

    const socialLinks: { name: string, url: string }[] = [
        { name: 'Facebook', url: 'https://facebook.com/usa.startup.consulting' },
        { name: 'LinkedIn', url: 'https://linkedin.com/company/75661993/admin/dashboard/' }
    ];

    socialLinks.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.textContent = social.name;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `Visit our ${social.name} page`);
        socialLinksDiv.appendChild(link);
    });

    headerContent.appendChild(titleDiv);
    headerContent.appendChild(socialLinksDiv);
    container.appendChild(headerContent);
}
