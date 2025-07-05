import { createHeader } from './Header';
import { createFooter } from './Footer';

interface WebsiteData {
    webSite: string;
    title: string;
    description: string;
}

const data: WebsiteData[] = [
    {
        webSite: "contents.ai-biz.app",
        title: "AI Content Generation Hub",
        description: "Effortlessly convert your presentations, scripts, audio, and YouTube videos into engaging scripts, podcasts, blog posts, and accurate transcripts with the power of AI."
    },
    {
        webSite: "investorhub-dash.ai-biz.app",
        title: "InvestorHub Dashboard",
        description: "Dashboard for InvestorHub."
    },
    {
        webSite: "investorhub.ai-biz.app",
        title: "InvestorHub Platform",
        description: "Your hub for smart, transparent investments, and investment scoring."
    },
    {
        webSite: "qrcode.ai-biz.app",
        title: "QR Code Generator",
        description: "Generate a QR code for any website."
    },
    {
        webSite: "video-synthesizer.ai-biz.app",
        title: "Video Audio Synthesizer",
        description: "Combine video and audio directly in your browser."
    },
   
    {
        webSite: "insights.ai-biz.app",
        title: "AI-Powered Insights for Every Topic",
        description: "Generate comprehensive, validated insights on any topic using our advanced AI research agents. Get structured analysis with confidence scores and actionable intelligence."
    },
    {
        webSite: "myjob.ai-biz.app",
        title: "MyJob: AI-Powered Job Search",
        description: "AI-driven job matching platform that analyzes resumes against job descriptions and provides interactive resume tailoring assistance."
    },
    {
        webSite: "screen-capture.ai-biz.app",
        title: "Website Screenshot Capture",
        description: "Capture full-page screenshots of any website instantly."
    },
    {
        webSite: "workshop.ai-biz.app",
        title: "AI Workshop Landing Page",
        description: "We train you to build your business automation. Streamline processes, reduce costs, and increase efficiency with our expert AI solutions."
    },
    {
        webSite: "www.ai-biz.app",
        title: "Transform Your Business with AI Automation",
        description: "Leverage AI to automate and enhance your business operations."
    }
];

function populateTable() {
    const tableBody = document.getElementById('websitesTable')?.getElementsByTagName('tbody')[0];
    if (!tableBody) {
        console.error("Table body not found!");
        return;
    }

    data.forEach(item => {
        const row = tableBody.insertRow();

        const cellWebSite = row.insertCell();
        const link = document.createElement('a');
        link.href = `https://${item.webSite}`;
        link.textContent = item.title;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        cellWebSite.appendChild(link);

        const cellDescription = row.insertCell();
        cellDescription.textContent = item.description;
        cellDescription.classList.add('description-cell');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('app-header-placeholder');
    if (headerPlaceholder) {
        createHeader(headerPlaceholder);
    } else {
        console.error("Header placeholder not found!");
    }

    const footerPlaceholder = document.getElementById('app-footer-placeholder');
    if (footerPlaceholder) {
        createFooter(footerPlaceholder);
    } else {
        console.error("Footer placeholder not found!");
    }

    populateTable();
});