import { getLang } from './i18n';
import { t } from './i18n-data';

export function createFooter(container: HTMLElement): void {
    const ui = t(getLang());
    container.innerHTML = '';

    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';

    const footerGrid = document.createElement('div');
    footerGrid.className = 'footer-grid';

    // Section 1: Personal Info
    const infoSection = document.createElement('div');
    infoSection.className = 'footer-section company-info';
    const infoHeader = document.createElement('h3');
    infoHeader.textContent = getLang() === 'ko' ? '송재희' : 'Jaehee Song';
    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = ui.footerDescription;
    infoSection.appendChild(infoHeader);
    infoSection.appendChild(infoParagraph);
    footerGrid.appendChild(infoSection);

    // Section 2: Services
    const servicesSection = document.createElement('div');
    servicesSection.className = 'footer-section';
    const servicesHeader = document.createElement('h3');
    servicesHeader.textContent = ui.footerServices;
    const servicesList = document.createElement('ul');
    const serviceItems = [
        { name: 'Clearly - BRD/PRD Generator', url: 'https://www.clearlyreqs.com' },
        { name: 'MyJob - Job Search Platform', url: 'https://myjob.ai-biz.app' },
        { name: 'AI Insights Generator', url: 'https://insights.ai-biz.app' },
        { name: 'InNews - Newsletter Platform', url: 'https://newsletter.ai-biz.app' },
    ];
    serviceItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.name;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        li.appendChild(a);
        servicesList.appendChild(li);
    });
    servicesSection.appendChild(servicesHeader);
    servicesSection.appendChild(servicesList);
    footerGrid.appendChild(servicesSection);

    // Section 3: Affiliations
    const affiliationsSection = document.createElement('div');
    affiliationsSection.className = 'footer-section';
    const affiliationsHeader = document.createElement('h3');
    affiliationsHeader.textContent = ui.footerAffiliations;
    const affiliationsList = document.createElement('ul');
    const affiliationItems = [
        { name: 'Seattle Partners LLC', url: 'https://www.seattlepartners.us' },
        { name: 'Startup Consulting Inc.', url: '/company/' },
        { name: ui.footerAboutFounder, url: '/founder/' },
    ];
    affiliationItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.name;
        if (item.url.startsWith('http')) {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
        }
        li.appendChild(a);
        affiliationsList.appendChild(li);
    });
    affiliationsSection.appendChild(affiliationsHeader);
    affiliationsSection.appendChild(affiliationsList);
    footerGrid.appendChild(affiliationsSection);

    // Section 4: Contact
    const contactSection = document.createElement('div');
    contactSection.className = 'footer-section';
    const contactHeader = document.createElement('h3');
    contactHeader.textContent = ui.footerConnect;
    const contactList = document.createElement('ul');

    const contactItems = [
        { icon: '\uD83D\uDCE7', text: 'info@koreatous.com', url: 'mailto:info@koreatous.com' },
        { icon: '\uD83D\uDD17', text: 'LinkedIn', url: 'https://www.linkedin.com/in/jaehee-song-happy/' },
        { icon: '\u270D\uFE0F', text: 'Medium', url: 'https://medium.com/@jsong_49820' },
        { icon: '\uD83D\uDCDD', text: 'Brunch', url: 'https://brunch.co.kr/@abrahamsong' },
    ];
    contactItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'footer-contact-item';
        const icon = document.createElement('span');
        icon.textContent = item.icon;
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.text;
        if (item.url.startsWith('http')) {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
        }
        li.appendChild(icon);
        li.appendChild(a);
        contactList.appendChild(li);
    });
    contactSection.appendChild(contactHeader);
    contactSection.appendChild(contactList);
    footerGrid.appendChild(contactSection);

    footerContainer.appendChild(footerGrid);

    // Footer Bottom
    const footerBottom = document.createElement('div');
    footerBottom.className = 'footer-bottom';

    const copyright = document.createElement('p');
    copyright.innerHTML = `&copy; ${new Date().getFullYear()} Jaehee Song | Startup Consulting Inc. ${ui.footerAllRights}`;

    const legalLinks = document.createElement('div');
    legalLinks.className = 'footer-bottom-links';
    [
        { name: ui.footerPrivacy, url: '/privacy-policy/' },
        { name: ui.footerTerms, url: '/terms-of-service/' }
    ].forEach(legal => {
        const a = document.createElement('a');
        a.href = legal.url;
        a.textContent = legal.name;
        legalLinks.appendChild(a);
    });

    footerBottom.appendChild(copyright);
    footerBottom.appendChild(legalLinks);
    footerContainer.appendChild(footerBottom);

    container.appendChild(footerContainer);
}
