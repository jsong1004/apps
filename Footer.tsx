export function createFooter(container: HTMLElement): void {
    container.innerHTML = ''; // Clear any existing content

    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';

    const footerGrid = document.createElement('div');
    footerGrid.className = 'footer-grid';

    // Section 1: Company Info
    const companyInfoSection = document.createElement('div');
    companyInfoSection.className = 'footer-section company-info';
    const companyHeader = document.createElement('h3');
    companyHeader.textContent = 'Startup Consulting Inc.';
    const companyParagraph = document.createElement('p');
    companyParagraph.textContent = 'Transforming businesses through AI automation and education.';

    companyInfoSection.appendChild(companyHeader);
    companyInfoSection.appendChild(companyParagraph);
    footerGrid.appendChild(companyInfoSection);

    // Section 2: Services
    const servicesSection = document.createElement('div');
    servicesSection.className = 'footer-section';
    const servicesHeader = document.createElement('h3');
    servicesHeader.textContent = 'Services';
    const servicesList = document.createElement('ul');
    const serviceItems = ['AI Workshops', 'Custom Automation', 'Managed Services', 'Consulting'];
    serviceItems.forEach(itemText => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#'; // Placeholder link
        link.textContent = itemText;
        listItem.appendChild(link);
        servicesList.appendChild(listItem);
    });
    servicesSection.appendChild(servicesHeader);
    servicesSection.appendChild(servicesList);
    footerGrid.appendChild(servicesSection);

    // Section 3: Company
    const companySection = document.createElement('div');
    companySection.className = 'footer-section';
    const companyLinksHeader = document.createElement('h3');
    companyLinksHeader.textContent = 'Company';
    const companyLinksList = document.createElement('ul');
    const companyLinkItems = ['About Founder', 'About Company', 'Case Studies'];
    companyLinkItems.forEach(itemText => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#'; // Placeholder link
        link.textContent = itemText;
        listItem.appendChild(link);
        companyLinksList.appendChild(listItem);
    });
    companySection.appendChild(companyLinksHeader);
    companySection.appendChild(companyLinksList);
    footerGrid.appendChild(companySection);

    // Section 4: Contact
    const contactSection = document.createElement('div');
    contactSection.className = 'footer-section';
    const contactHeader = document.createElement('h3');
    contactHeader.textContent = 'Contact';
    const contactList = document.createElement('ul');
    
    const emailItem = document.createElement('li');
    emailItem.className = 'footer-contact-item';
    const emailIcon = document.createElement('span');
    emailIcon.textContent = '📧'; // Email emoji as a placeholder
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:info@koreatous.com';
    emailLink.textContent = 'info@koreatous.com';
    emailItem.appendChild(emailIcon);
    emailItem.appendChild(emailLink);
    contactList.appendChild(emailItem);

    // Add more contact items if needed (e.g., Phone)
    // const phoneItem = document.createElement('li');
    // phoneItem.className = 'footer-contact-item';
    // const phoneIcon = document.createElement('span');
    // phoneIcon.textContent = '📞 ';
    // phoneItem.appendChild(phoneIcon);
    // phoneItem.append(' (123) 456-7890'); // Example phone
    // contactList.appendChild(phoneItem);

    contactSection.appendChild(contactHeader);
    contactSection.appendChild(contactList);
    footerGrid.appendChild(contactSection);

    footerContainer.appendChild(footerGrid);

    // Footer Bottom: Copyright and Legal Links
    const footerBottom = document.createElement('div');
    footerBottom.className = 'footer-bottom';
    
    const copyrightText = document.createElement('p');
    copyrightText.innerHTML = `&copy; ${new Date().getFullYear()} Startup Consulting Inc. All rights reserved.`; // Corrected template literal
    
    const legalLinksDiv = document.createElement('div');
    legalLinksDiv.className = 'footer-bottom-links';
    const legalLinks = [
        { name: 'Privacy Policy', url: '#' },
        { name: 'Terms of Service', url: '#' }
    ];
    legalLinks.forEach(legal => {
        const link = document.createElement('a');
        link.href = legal.url;
        link.textContent = legal.name;
        legalLinksDiv.appendChild(link);
    });

    footerBottom.appendChild(copyrightText);
    footerBottom.appendChild(legalLinksDiv);
    footerContainer.appendChild(footerBottom);
    
    container.appendChild(footerContainer);
}