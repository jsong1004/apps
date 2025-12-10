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
    const serviceItems = [
        { 
            name: 'AI Workshops', 
            url: 'https://www.ai-biz.app', 
            tooltip: 'We train you to build your business automation. Streamline processes, reduce costs, and increase efficiency with our expert AI solutions.'
        },
        { 
            name: 'Business Automation', 
            url: 'https://www.ai-biz.app', 
            tooltip: 'Transform your business with ai automation. we build business automation process to automate and enhance your business.'
        },
        { 
            name: 'Topic Insights', 
            url: 'https://insights.ai-biz.app', 
            tooltip: 'Generate comprehensive, validated insights on any topic using our advanced AI research agents. Get structured analysis with confidence scores and actionable intelligence.'
        },
        { 
            name: 'Company Insights', 
            url: 'https://company.ai-biz.app', 
            tooltip: 'Transforming Company Intelligence with AI. Generate comprehensive, validated insights on a company using our advanced AI research agents.'
        },
        { 
            name: 'My Resume', 
            url: 'https://myjob.ai-biz.app', 
            tooltip: 'AI-driven job matching platform that analyzes resumes against job descriptions and provides interactive resume tailoring assistance.'
        },
        { 
            name: 'Clearly Requirements for AI Coding', 
            url: 'https://clearlyreqs.com', 
            tooltip: 'Transform ideas into professional BRDs and PRDs in minutes with AI-guided conversations. No templates. No guesswork. Just clear requirements.'
        }
    ];
    serviceItems.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.name;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.title = item.tooltip; // This creates the tooltip on hover
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
    const companyLinkItems = [
        { name: 'About Founder', url: '/founder/' },
        { name: 'About Company', url: '/company/' },
        { name: 'Case Studies', url: '/case-studies/' }
    ];
    companyLinkItems.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.name;
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
        { name: 'Privacy Policy', url: '/privacy-policy/' },
        { name: 'Terms of Service', url: '/terms-of-service/' }
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