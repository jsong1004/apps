import { createHeader } from './Header';
import { createFooter } from './Footer';

interface WebsiteData {
    webSite: string;
    title: string;
    description: string;
    category: string;
    icon: string;
    badge: string;
}

const data: WebsiteData[] = [
    {
        webSite: "contents.ai-biz.app",
        title: "AI Content Generation Hub",
        description: "Effortlessly convert your presentations, scripts, audio, and YouTube videos into engaging scripts, podcasts, blog posts, and accurate transcripts with the power of AI.",
        category: "ai",
        icon: "ai-content",
        badge: "live"
    },
    {
        webSite: "investorhub-dash.ai-biz.app",
        title: "InvestorHub Dashboard",
        description: "Dashboard for InvestorHub.",
        category: "business",
        icon: "investment",
        badge: "live"
    },
    {
        webSite: "investorhub.ai-biz.app",
        title: "InvestorHub Platform",
        description: "Your hub for smart, transparent investments, and investment scoring.",
        category: "business",
        icon: "investment",
        badge: "live"
    },
    {
        webSite: "qrcode.ai-biz.app",
        title: "QR Code Generator",
        description: "Generate a QR code for any website.",
        category: "utility",
        icon: "utilities",
        badge: "live"
    },
    {
        webSite: "video-synthesizer.ai-biz.app",
        title: "Video Audio Synthesizer",
        description: "Combine video and audio directly in your browser.",
        category: "utility",
        icon: "utilities",
        badge: "live"
    },
   
    {
        webSite: "insights.ai-biz.app",
        title: "AI-Powered Insights for Every Topic",
        description: "Generate comprehensive, validated insights on any topic using our advanced AI research agents. Get structured analysis with confidence scores and actionable intelligence.",
        category: "ai",
        icon: "insights",
        badge: "live"
    },
    {
        webSite: "myjob.ai-biz.app",
        title: "MyJob: AI-Powered Job Search",
        description: "AI-driven job matching platform that analyzes resumes against job descriptions and provides interactive resume tailoring assistance.",
        category: "ai",
        icon: "job-search",
        badge: "live"
    },
    {
        webSite: "apps.ai-biz.app/myjob_investment/myjob-presentation.html",
        title: "MyJob Investment Presentation",
        description: "Complete presentation showcasing MyJob's AI-powered job search platform, featuring multi-agent architecture, comprehensive features, and future enhancement roadmap.",
        category: "presentation",
        icon: "job-search",
        badge: "demo"
    },
    {
        webSite: "screen-capture.ai-biz.app",
        title: "Website Screenshot Capture",
        description: "Capture full-page screenshots of any website instantly.",
        category: "utility",
        icon: "utilities",
        badge: "live"
    },
    {
        webSite: "workshop.ai-biz.app",
        title: "AI Workshop Landing Page",
        description: "We train you to build your business automation. Streamline processes, reduce costs, and increase efficiency with our expert AI solutions.",
        category: "business",
        icon: "workshop",
        badge: "live"
    },
    {
        webSite: "www.ai-biz.app",
        title: "Transform Your Business with AI Automation",
        description: "Leverage AI to automate and enhance your business operations.",
        category: "ai",
        icon: "workshop",
        badge: "live"
    },
    {
        webSite: "apps.ai-biz.app/presentations/highschool-special-lecture.html",
        title: "AI와 함께 꿈을 찾는 법",
        description: "고등학생 특별 강의 슬라이드: 인생 롤러코스터, 산 너머 산, 꿈의 연속, 다양한 목표 달성법으로 동기부여, 미래 사회가 원하는 인재의 역량, AI 시대를 주도할 핵심 역량.",
        category: "presentation",
        icon: "presentation",
        badge: "live"
    },
    {
        webSite: "storybook.ai-biz.app",
        title: "아이들을 위한 맞춤형 동화책",
        description: "AI가 도와주는 쉽고 재미있는 동화책 제작 도구로, 아이들의 상상력을 아름다운 이야기와 그림으로 만들어보세요..",
        category: "ai",
        icon: "ai-content",
        badge: "live"
    }    
];

function populateCards() {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) {
        console.error("Tools grid not found!");
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.setAttribute('data-category', item.category);

        const iconMap: { [key: string]: string } = {
            'ai-content': '🎨',
            'investment': '📊',
            'utilities': '🔧',
            'insights': '🔍',
            'job-search': '💼',
            'workshop': '🎓',
            'presentation': '📝'
        };

        const categoryMap: { [key: string]: string } = {
            'ai': 'AI & ML',
            'business': 'Business',
            'utility': 'Utilities',
            'presentation': 'Presentation'
        };

        card.innerHTML = `
            <div class="tool-category category-${item.category}">${categoryMap[item.category] || item.category}</div>
            <div class="tool-icon ${item.icon}">${iconMap[item.icon] || '🚀'}</div>
            <h3 class="tool-title">${item.title}</h3>
            <p class="tool-description">${item.description}</p>
            <div class="tool-meta">
                <span class="tool-badge badge-${item.badge}">${item.badge}</span>
            </div>
            <div class="tool-actions">
                <a href="https://${item.webSite}" target="_blank" rel="noopener noreferrer" class="btn-primary">Visit Tool</a>
                <button class="btn-secondary" onclick="copyToClipboard('${item.webSite}')">Copy URL</button>
            </div>
        `;

        toolsGrid.appendChild(card);
    });
}

function copyToClipboard(url: string) {
    navigator.clipboard.writeText(`https://${url}`).then(() => {
        // You could add a toast notification here
        console.log('URL copied to clipboard');
    });
}

function setupSearchAndFilter() {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const filterTabs = document.querySelectorAll('.filter-tab');
    const toolCards = document.querySelectorAll('.tool-card');

    // Search functionality
    searchInput?.addEventListener('input', (e) => {
        const searchTerm = (e.target as HTMLInputElement).value.toLowerCase();
        const activeCategory = document.querySelector('.filter-tab.active')?.getAttribute('data-category');

        toolCards.forEach(card => {
            const title = card.querySelector('.tool-title')?.textContent?.toLowerCase() || '';
            const description = card.querySelector('.tool-description')?.textContent?.toLowerCase() || '';
            const category = card.getAttribute('data-category');

            const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
            const matchesCategory = activeCategory === 'all' || category === activeCategory;

            if (matchesSearch && matchesCategory) {
                (card as HTMLElement).style.display = 'block';
            } else {
                (card as HTMLElement).style.display = 'none';
            }
        });
    });

    // Filter functionality
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Filter cards
            toolCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
                    (card as HTMLElement).style.display = 'block';
                } else {
                    (card as HTMLElement).style.display = 'none';
                }
            });

            // Clear search when filter changes
            if (searchInput) {
                searchInput.value = '';
            }
        });
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

    populateCards();
    setupSearchAndFilter();
});