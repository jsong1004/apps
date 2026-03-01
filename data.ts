export interface ToolData {
    webSite: string;
    title: string;
    description: string;
    category: string;
    icon: string;
    badge: string;
}

export interface CareerEntry {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    highlights: string[];
}

export interface BookEntry {
    title: string;
    titleKo?: string;
    description: string;
    links: { label: string; url: string }[];
}

export interface LectureEntry {
    venue: string;
    topic: string;
    year: string;
}

export interface ProgramEntry {
    name: string;
    period: string;
    partner: string;
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface EducationEntry {
    institution: string;
    degree: string;
    field: string;
}

export interface PortfolioData {
    name: string;
    titles: string[];
    summary: string;
    aboutText: string[];
    stats: { label: string; value: string }[];
    career: CareerEntry[];
    tools: ToolData[];
    books: BookEntry[];
    lectures: LectureEntry[];
    programs: ProgramEntry[];
    skills: SkillCategory[];
    education: EducationEntry[];
    social: { name: string; url: string }[];
    contact: { email: string };
}

import type { Lang } from './i18n';

export function getPortfolioData(lang: Lang): PortfolioData {
    return lang === 'ko' ? portfolioDataKo : portfolioData;
}

export const portfolioData: PortfolioData = {
    name: "Jaehee Song",
    titles: [
        "Data Platform Architect",
        "AI Solution Developer",
        "Executive Director"
    ],
    summary: "Data Platform Architect and AI Solution Developer with 20+ years of experience designing large-scale data systems, multi-agent AI platforms, and cloud-native applications. Executive Director at Seattle Partners, leading US market entry accelerator programs for Korean startups while building production-grade AI services.",
    aboutText: [
        "With over 20 years of experience in data platform architecture and AI solution development, I bridge technology and business across international markets. As the Executive Director at Seattle Partners and CEO of Startup Consulting Inc., I help Korean startups successfully enter the US market while building production-grade AI services.",
        "My technical expertise spans from real-time analytics platforms using Apache Druid at Visa to modern multi-agent AI systems using CrewAI, LangChain, and Google Gemini. I've built multiple commercially viable AI products including Clearly (BRD/PRD generator), MyJob (multi-agent job search platform), AI Insights Generator, and InNews (newsletter platform).",
        "Beyond building technology, I'm passionate about developing next-generation talent through global internship programs, training 60+ students across Korea and the US. I'm also a published author sharing knowledge about career transitions and AI development."
    ],
    stats: [
        { value: "20+", label: "Years Experience" },
        { value: "50+", label: "Startups Supported" },
        { value: "60+", label: "Students Trained" },
        { value: "10+", label: "AI Services Built" }
    ],
    career: [
        {
            company: "Seattle Partners LLC",
            role: "Executive Director",
            period: "2022 - Present",
            location: "Seattle, WA",
            description: "Leading US market entry accelerator programs for Korean startups. Full-cycle consulting including GTM strategy, market research, product development guidance, and AI solution implementation.",
            highlights: [
                "Operating Seoul Startup Hub Global POC Program - supporting 27 startups entering the US market",
                "Hosted 2025 Startup World Cup Seattle Regional with 300+ registrants and 12 competing startups",
                "Partnership with UW CoMotion Startup Hall and Los Altos Chamber of Commerce",
                "Designed and launched the InvestorHub suite for real-time startup pitch scoring"
            ]
        },
        {
            company: "Startup Consulting Inc.",
            role: "CEO",
            period: "2018 - Present",
            location: "Seattle, WA",
            description: "AI-driven consulting for US market entry, AI service development, research automation systems, and global training programs.",
            highlights: [
                "Built multiple production AI services: Clearly, MyJob, InNews, AI Insights Generator",
                "Managed multi-university global internship programs",
                "Consulting for startups across battery recycling, education, veterinary telemedicine"
            ]
        },
        {
            company: "Visa Inc.",
            role: "Staff Data Engineer",
            period: "2008 - 2025",
            location: "Bellevue, WA",
            description: "Designed and operated enterprise-level data systems including real-time analytics platforms, database inventory management, and DBaaS infrastructure.",
            highlights: [
                "Built Apache Druid real-time analytics platform from PoC to production",
                "Achieved 90% reduction in deployment time through automated pipelines",
                "Implemented DBaaS for MongoDB, Neo4j, and Apache Druid",
                "Saved 40+ hours/month through automated database inventory management"
            ]
        },
        {
            company: "Seattle Basecamp Inc.",
            role: "CEO",
            period: "2019 - 2023",
            location: "Redmond, WA",
            description: "Planned and executed startup acceleration programs and startup experience programs for major corporations.",
            highlights: [
                "Operated KSC Seattle Accelerating Program for 18 companies",
                "Conducted LG Global X (2 teams) and startup idea hackathon (54 teams, 261 people)",
                "LG Executive Future Strategy Program for 9 executive-level leaders"
            ]
        },
        {
            company: "KNFT LLC",
            role: "CEO",
            period: "2020 - 2021",
            location: "Seattle, WA",
            description: "Converting artworks from Korean artists into NFTs and selling them on NFT marketplaces.",
            highlights: [
                "K-Love project: Calligraphy artworks expressing 'love' by 11 Korean artists",
                "K-Gat project: Promoting Korean traditional hat culture through art"
            ]
        },
        {
            company: "Smart Career LLC",
            role: "CEO",
            period: "2019 - 2020",
            location: "WA",
            description: "AI-powered career development platform providing visual career paths using knowledge graphs and personalized career recommendations.",
            highlights: [
                "Built AI-powered career recommendation engine using big data analysis",
                "Provided visual career paths using knowledge graphs"
            ]
        },
        {
            company: "Nowcom",
            role: "Lead DBA / BI Developer",
            period: "2000 - 2008",
            location: "WA",
            description: "Technical services, software development, and DB administration for a major dealer management solutions provider.",
            highlights: [
                "Reduced licensing fees through In-House Log Shipping solution",
                "Built Enterprise Operational Data Store (EODS) consolidating all production data"
            ]
        }
    ],
    tools: [
        {
            webSite: "www.clearlyreqs.com/",
            title: "Clearly - AI-Powered BRD/PRD Generator",
            description: "Transform ideas into professional BRDs and PRDs in minutes with AI-guided conversations. Features document versioning, collaboration, and admin analytics.",
            category: "ai",
            icon: "productivity",
            badge: "live"
        },
        {
            webSite: "myjob.ai-biz.app",
            title: "MyJob - Multi-Agent Job Search Platform",
            description: "AI-driven job matching with multi-agent scoring engine, 5-second resume tailoring, cover letter generation, and interview preparation.",
            category: "ai",
            icon: "job-search",
            badge: "live"
        },
        {
            webSite: "newsletter.ai-biz.app/",
            title: "InNews - Newsletter Platform",
            description: "Multi-tenant newsletter management with rich text editor, scheduling, recipient management, analytics, and role-based access.",
            category: "ai",
            icon: "productivity",
            badge: "live"
        },
        {
            webSite: "insights.ai-biz.app",
            title: "AI Insights Generator",
            description: "Multi-agent research platform generating structured insights using CrewAI workflows with community features and subscription controls.",
            category: "ai",
            icon: "insights",
            badge: "live"
        },
        {
            webSite: "company-insights-prod-ef210.web.app",
            title: "Company Insights",
            description: "AI agents work together to deliver institutional-grade business intelligence and company research insights in minutes.",
            category: "ai",
            icon: "insights",
            badge: "live"
        },
        {
            webSite: "contents.ai-biz.app",
            title: "AI Content Generation Hub",
            description: "Convert presentations, scripts, audio, and YouTube videos into engaging scripts, podcasts, blog posts, and transcripts.",
            category: "ai",
            icon: "creativity",
            badge: "live"
        },
        {
            webSite: "storybook.ai-biz.app",
            title: "AI Storybook Creator",
            description: "Create personalized illustrated storybooks with AI. From text to illustrations, generate age-appropriate stories in minutes.",
            category: "ai",
            icon: "creativity",
            badge: "live"
        },
        {
            webSite: "investorhub.ai-biz.app",
            title: "InvestorHub Platform",
            description: "Smart, transparent investment scoring platform for startup pitch events with real-time judging and analytics.",
            category: "business",
            icon: "investment",
            badge: "live"
        },
        {
            webSite: "investorhub-dash.ai-biz.app",
            title: "InvestorHub Dashboard",
            description: "Live analytics tool that instantly visualizes startup pitch scores and performance insights.",
            category: "business",
            icon: "investment",
            badge: "live"
        },
        {
            webSite: "www.ai-biz.app",
            title: "AI Business Automation",
            description: "Leverage AI to automate and enhance your business operations with expert AI solutions.",
            category: "business",
            icon: "workshop",
            badge: "live"
        },
        {
            webSite: "workshop.ai-biz.app",
            title: "AI Workshop",
            description: "Training platform to build your own business automation. Streamline processes, reduce costs, and increase efficiency.",
            category: "business",
            icon: "workshop",
            badge: "live"
        },
        {
            webSite: "qrcode.ai-biz.app",
            title: "QR Code Generator",
            description: "Generate QR codes for any website instantly.",
            category: "utility",
            icon: "utilities",
            badge: "live"
        },
        {
            webSite: "survey.ai-biz.app",
            title: "AI Survey Generator",
            description: "AI-powered tool for creating professional surveys and forms with templates, custom prompts, and various sharing options.",
            category: "utility",
            icon: "marketing",
            badge: "live"
        },
        {
            webSite: "screen-capture.ai-biz.app",
            title: "Website Screenshot Capture",
            description: "Capture full-page screenshots of any website instantly.",
            category: "utility",
            icon: "utilities",
            badge: "live"
        }
    ],
    books: [
        {
            title: "This Is How We Came",
            titleKo: "우리는 이렇게 왔다",
            description: "Employment stories of 25 native Koreans who successfully transitioned to US tech companies. Real-world experiences, challenges, and strategies for building a career in American technology.",
            links: [
                { label: "Yes24", url: "https://www.yes24.com/product/goods/63010781" }
            ]
        },
        {
            title: "AI Development Guide",
            description: "A comprehensive guide to AI development covering practical approaches, tools, and strategies for building AI-powered applications and services.",
            links: [
                { label: "Amazon", url: "https://www.amazon.com/dp/B0GNLS52YY" },
                { label: "Google Play", url: "https://play.google.com/store/books/details?id=R6vCEQAAQBAJ" },
                { label: "Apple Books", url: "https://books.apple.com/us/book/ai-development-guide/id6759671436" },
                { label: "Books2Read", url: "https://books2read.com/u/bwPwP0" }
            ]
        }
    ],
    lectures: [
        { venue: "Amazon Korea", topic: "Data Analysis and Artificial Intelligence", year: "2018" },
        { venue: "Samsung Electronics Research Center", topic: "Data Collection, Analysis, and Visualization", year: "2018" },
        { venue: "Korea Artificial Intelligence Academy", topic: "US Chatbot Status and US Employment", year: "2019" },
        { venue: "Gyeongbuk Software High School", topic: "Introduction to Data Engineer Practical Work, Developer Competencies in the Generative AI Era", year: "2024" },
        { venue: "Goorm", topic: "Vibe Coding - Innovation in Working Methods", year: "2025" },
        { venue: "Goorm, Inha University", topic: "AI Trends and Developer Skills", year: "2024" },
        { venue: "DGIST, Daegu Catholic University", topic: "Data Engineering", year: "2022" },
        { venue: "Washington Education Institution", topic: "Workshops and Lectures for Experts and Students", year: "2023" },
        { venue: "42 Gyeongsan", topic: "Developer Mentoring", year: "2024" }
    ],
    programs: [
        { name: "Smart Career Project", period: "May 2019 - Aug 2019", partner: "Backend Development (Python, Graph Database, Django)" },
        { name: "Smart Career Web Development", period: "Sep 2021 - Dec 2021", partner: "Daegu Catholic University" },
        { name: "Smart Career Development", period: "Nov 2021 - Feb 2022", partner: "University Student Bible Reading Mission" },
        { name: "US Department of Labor Data Analysis", period: "Jun 2022 - Aug 2022", partner: "Daegu Catholic University" },
        { name: "US Department of Labor Data Analysis", period: "Jun 2022 - Aug 2022", partner: "Yeungnam University" },
        { name: "US Department of Labor Data Analysis", period: "Jun 2022 - Aug 2022", partner: "DGIST" },
        { name: "Gen AI + RAG Service Construction", period: "Aug 2023 - Oct 2023", partner: "Daegu Catholic University" },
        { name: "Gen AI + RAG Service Construction", period: "Jun 2023 - Aug 2023", partner: "DGIST" }
    ],
    skills: [
        { name: "Programming", skills: ["Python", "TypeScript", "JavaScript", "SQL", "Shell Script", "Next.js"] },
        { name: "AI & ML", skills: ["LangChain", "LangGraph", "CrewAI", "RAG", "GraphRAG", "Google Gemini", "Hugging Face", "TensorFlow.js", "PyTorch", "Vertex AI"] },
        { name: "Web Development", skills: ["React", "Next.js", "Node.js", "Express", "Flask", "Vite", "Tailwind CSS", "Material UI"] },
        { name: "Databases", skills: ["PostgreSQL", "Supabase", "MongoDB", "Firebase", "Neo4j", "MS SQL Server", "MySQL", "Pinecone", "QDrant"] },
        { name: "Cloud & DevOps", skills: ["GCP", "AWS", "Firebase", "Cloud Run", "Docker", "Ansible", "Chef", "Terraform"] },
        { name: "Big Data", skills: ["Apache Druid", "Apache Spark", "Apache Kafka", "Hadoop", "ETL Pipelines"] },
        { name: "Analytics & BI", skills: ["Grafana", "Power BI", "Tableau", "SSRS", "SSIS"] }
    ],
    education: [
        { institution: "Kwangwoon University", degree: "Master's", field: "Electronic Engineering (AI)" },
        { institution: "Bellevue College", degree: "Certificate", field: "Business Intelligence" }
    ],
    social: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/jaehee-song-happy/" },
        { name: "Medium", url: "https://medium.com/@jsong_49820" },
        { name: "Brunch", url: "https://brunch.co.kr/@abrahamsong" }
    ],
    contact: {
        email: "info@koreatous.com"
    }
};

const portfolioDataKo: PortfolioData = {
    name: "송재희",
    titles: [
        "데이터 플랫폼 아키텍트",
        "AI 솔루션 개발자",
        "상무이사"
    ],
    summary: "20년 이상의 경험을 가진 데이터 플랫폼 아키텍트이자 AI 솔루션 개발자. 대규모 데이터 시스템, 멀티에이전트 AI 플랫폼, 클라우드 네이티브 애플리케이션을 설계합니다. Seattle Partners 상무이사로서 한국 스타트업의 미국 시장 진출 액셀러레이터 프로그램을 이끌며 프로덕션급 AI 서비스를 구축합니다.",
    aboutText: [
        "데이터 플랫폼 아키텍처와 AI 솔루션 개발 분야에서 20년 이상의 경험을 바탕으로, 국제 시장에서 기술과 비즈니스를 연결합니다. Seattle Partners 상무이사이자 Startup Consulting Inc. CEO로서, 한국 스타트업의 성공적인 미국 시장 진출을 지원하며 프로덕션급 AI 서비스를 구축하고 있습니다.",
        "기술적 전문성은 Visa에서의 Apache Druid 실시간 분석 플랫폼부터 CrewAI, LangChain, Google Gemini를 활용한 최신 멀티에이전트 AI 시스템까지 폭넓게 아우릅니다. Clearly (BRD/PRD 생성기), MyJob (멀티에이전트 채용 플랫폼), AI Insights Generator, InNews (뉴스레터 플랫폼) 등 다수의 상용 AI 제품을 개발했습니다.",
        "기술 구축을 넘어, 글로벌 인턴십 프로그램을 통해 차세대 인재 양성에 열정을 쏟고 있으며, 한국과 미국에서 60명 이상의 학생을 교육했습니다. 또한 커리어 전환과 AI 개발에 관한 지식을 공유하는 출판 저자이기도 합니다."
    ],
    stats: [
        { value: "20+", label: "경력 (년)" },
        { value: "50+", label: "지원 스타트업" },
        { value: "60+", label: "교육 학생" },
        { value: "10+", label: "구축 AI 서비스" }
    ],
    career: [
        {
            company: "Seattle Partners LLC",
            role: "상무이사",
            period: "2022 - 현재",
            location: "시애틀, WA",
            description: "한국 스타트업을 위한 미국 시장 진출 액셀러레이터 프로그램 총괄. GTM 전략, 시장 조사, 제품 개발 가이드, AI 솔루션 구현을 포함한 풀사이클 컨설팅.",
            highlights: [
                "서울창업허브 글로벌 PoC 프로그램 운영 - 27개 스타트업의 미국 시장 진출 지원",
                "2025 Startup World Cup 시애틀 지역 예선 개최 - 300+ 등록자, 12개 경쟁 스타트업",
                "UW CoMotion Startup Hall 및 Los Altos 상공회의소와 파트너십",
                "실시간 스타트업 피칭 채점을 위한 InvestorHub 제품군 설계 및 출시"
            ]
        },
        {
            company: "Startup Consulting Inc.",
            role: "CEO",
            period: "2018 - 현재",
            location: "시애틀, WA",
            description: "미국 시장 진출, AI 서비스 개발, 연구 자동화 시스템, 글로벌 교육 프로그램을 위한 AI 기반 컨설팅.",
            highlights: [
                "다수의 프로덕션 AI 서비스 구축: Clearly, MyJob, InNews, AI Insights Generator",
                "다중 대학 글로벌 인턴십 프로그램 관리",
                "배터리 재활용, 교육, 수의 원격진료 분야 스타트업 컨설팅"
            ]
        },
        {
            company: "Visa Inc.",
            role: "Staff 데이터 엔지니어",
            period: "2008 - 2025",
            location: "벨뷰, WA",
            description: "실시간 분석 플랫폼, 데이터베이스 인벤토리 관리, DBaaS 인프라를 포함한 엔터프라이즈급 데이터 시스템 설계 및 운영.",
            highlights: [
                "Apache Druid 실시간 분석 플랫폼을 PoC에서 프로덕션까지 구축",
                "자동화 파이프라인을 통해 배포 시간 90% 단축 달성",
                "MongoDB, Neo4j, Apache Druid용 DBaaS 구현",
                "자동화된 데이터베이스 인벤토리 관리로 월 40시간 이상 절감"
            ]
        },
        {
            company: "Seattle Basecamp Inc.",
            role: "CEO",
            period: "2019 - 2023",
            location: "레드먼드, WA",
            description: "대기업을 위한 스타트업 액셀러레이션 프로그램 및 스타트업 체험 프로그램 기획 및 실행.",
            highlights: [
                "KSC 시애틀 액셀러레이팅 프로그램 운영 - 18개 기업",
                "LG Global X (2개 팀) 및 스타트업 아이디어 해커톤 (54개 팀, 261명) 진행",
                "LG 임원 미래전략 프로그램 - 9명의 임원급 리더"
            ]
        },
        {
            company: "KNFT LLC",
            role: "CEO",
            period: "2020 - 2021",
            location: "시애틀, WA",
            description: "한국 아티스트의 작품을 NFT로 변환하여 NFT 마켓플레이스에서 판매.",
            highlights: [
                "K-Love 프로젝트: 11명의 한국 아티스트가 '사랑'을 표현한 캘리그라피 작품",
                "K-Gat 프로젝트: 한국 전통 갓 문화를 예술로 알리기"
            ]
        },
        {
            company: "Smart Career LLC",
            role: "CEO",
            period: "2019 - 2020",
            location: "WA",
            description: "지식 그래프를 활용한 시각적 커리어 경로와 개인 맞춤형 직업 추천을 제공하는 AI 기반 커리어 개발 플랫폼.",
            highlights: [
                "빅데이터 분석을 활용한 AI 기반 직업 추천 엔진 구축",
                "지식 그래프를 활용한 시각적 커리어 경로 제공"
            ]
        },
        {
            company: "Nowcom",
            role: "수석 DBA / BI 개발자",
            period: "2000 - 2008",
            location: "WA",
            description: "주요 딜러 관리 솔루션 제공업체를 위한 기술 서비스, 소프트웨어 개발 및 DB 관리.",
            highlights: [
                "자체 로그 배송 솔루션을 통한 라이선스 비용 절감",
                "모든 프로덕션 데이터를 통합하는 Enterprise Operational Data Store (EODS) 구축"
            ]
        }
    ],
    tools: [
        {
            webSite: "www.clearlyreqs.com/",
            title: "Clearly - AI 기반 BRD/PRD 생성기",
            description: "AI 대화를 통해 아이디어를 몇 분 만에 전문적인 BRD와 PRD로 변환합니다. 문서 버전 관리, 협업, 관리자 분석 기능을 제공합니다.",
            category: "ai",
            icon: "productivity",
            badge: "live"
        },
        {
            webSite: "myjob.ai-biz.app",
            title: "MyJob - 멀티에이전트 채용 플랫폼",
            description: "멀티에이전트 채점 엔진을 활용한 AI 기반 채용 매칭, 5초 이력서 맞춤화, 자기소개서 생성, 면접 준비 기능.",
            category: "ai",
            icon: "job-search",
            badge: "live"
        },
        {
            webSite: "newsletter.ai-biz.app/",
            title: "InNews - 뉴스레터 플랫폼",
            description: "리치 텍스트 편집기, 예약 발송, 수신자 관리, 분석, 역할 기반 접근 제어를 갖춘 멀티테넌트 뉴스레터 관리 플랫폼.",
            category: "ai",
            icon: "productivity",
            badge: "live"
        },
        {
            webSite: "insights.ai-biz.app",
            title: "AI 인사이트 생성기",
            description: "CrewAI 워크플로우를 활용하여 구조화된 인사이트를 생성하는 멀티에이전트 리서치 플랫폼. 커뮤니티 기능과 구독 관리 포함.",
            category: "ai",
            icon: "insights",
            badge: "live"
        },
        {
            webSite: "company-insights-prod-ef210.web.app",
            title: "기업 인사이트",
            description: "AI 에이전트들이 협력하여 몇 분 만에 기관급 비즈니스 인텔리전스와 기업 리서치 인사이트를 제공합니다.",
            category: "ai",
            icon: "insights",
            badge: "live"
        },
        {
            webSite: "contents.ai-biz.app",
            title: "AI 콘텐츠 생성 허브",
            description: "프레젠테이션, 스크립트, 오디오, YouTube 동영상을 매력적인 스크립트, 팟캐스트, 블로그 게시물, 트랜스크립트로 변환합니다.",
            category: "ai",
            icon: "creativity",
            badge: "live"
        },
        {
            webSite: "storybook.ai-biz.app",
            title: "AI 스토리북 크리에이터",
            description: "AI로 맞춤형 일러스트 동화책을 만들어 보세요. 텍스트에서 일러스트까지, 몇 분 만에 연령에 맞는 이야기를 생성합니다.",
            category: "ai",
            icon: "creativity",
            badge: "live"
        },
        {
            webSite: "investorhub.ai-biz.app",
            title: "InvestorHub 플랫폼",
            description: "스타트업 피칭 이벤트를 위한 스마트하고 투명한 투자 채점 플랫폼. 실시간 심사 및 분석 기능.",
            category: "business",
            icon: "investment",
            badge: "live"
        },
        {
            webSite: "investorhub-dash.ai-biz.app",
            title: "InvestorHub 대시보드",
            description: "스타트업 피칭 점수와 성과 인사이트를 즉시 시각화하는 실시간 분석 도구.",
            category: "business",
            icon: "investment",
            badge: "live"
        },
        {
            webSite: "www.ai-biz.app",
            title: "AI 비즈니스 자동화",
            description: "전문 AI 솔루션으로 비즈니스 운영을 자동화하고 향상시키세요.",
            category: "business",
            icon: "workshop",
            badge: "live"
        },
        {
            webSite: "workshop.ai-biz.app",
            title: "AI 워크숍",
            description: "나만의 비즈니스 자동화를 구축하는 교육 플랫폼. 프로세스를 간소화하고 비용을 절감하며 효율성을 높이세요.",
            category: "business",
            icon: "workshop",
            badge: "live"
        },
        {
            webSite: "qrcode.ai-biz.app",
            title: "QR 코드 생성기",
            description: "어떤 웹사이트든 즉시 QR 코드를 생성하세요.",
            category: "utility",
            icon: "utilities",
            badge: "live"
        },
        {
            webSite: "survey.ai-biz.app",
            title: "AI 설문조사 생성기",
            description: "템플릿, 맞춤 프롬프트, 다양한 공유 옵션을 갖춘 AI 기반 전문 설문조사 및 양식 생성 도구.",
            category: "utility",
            icon: "marketing",
            badge: "live"
        },
        {
            webSite: "screen-capture.ai-biz.app",
            title: "웹사이트 스크린샷 캡처",
            description: "어떤 웹사이트든 즉시 전체 페이지 스크린샷을 캡처하세요.",
            category: "utility",
            icon: "utilities",
            badge: "live"
        }
    ],
    books: [
        {
            title: "우리는 이렇게 왔다",
            titleKo: "This Is How We Came",
            description: "미국 테크 기업으로 성공적으로 전환한 25명의 한국인 취업 이야기. 미국 기술 업계에서 커리어를 쌓기 위한 실제 경험, 도전, 전략을 담았습니다.",
            links: [
                { label: "Yes24", url: "https://www.yes24.com/product/goods/63010781" }
            ]
        },
        {
            title: "AI 개발 가이드",
            description: "AI 개발에 대한 종합 가이드. AI 기반 애플리케이션과 서비스를 구축하기 위한 실용적인 접근법, 도구, 전략을 다룹니다.",
            links: [
                { label: "Amazon", url: "https://www.amazon.com/dp/B0GNLS52YY" },
                { label: "Google Play", url: "https://play.google.com/store/books/details?id=R6vCEQAAQBAJ" },
                { label: "Apple Books", url: "https://books.apple.com/us/book/ai-development-guide/id6759671436" },
                { label: "Books2Read", url: "https://books2read.com/u/bwPwP0" }
            ]
        }
    ],
    lectures: [
        { venue: "아마존 코리아", topic: "데이터 분석과 인공지능", year: "2018" },
        { venue: "삼성전자 연구소", topic: "데이터 수집, 분석 및 시각화", year: "2018" },
        { venue: "한국인공지능아카데미", topic: "미국 챗봇 현황과 미국 취업", year: "2019" },
        { venue: "경북소프트웨어고등학교", topic: "데이터 엔지니어 실무 입문, 생성형 AI 시대의 개발자 역량", year: "2024" },
        { venue: "구름(Goorm)", topic: "바이브 코딩 - 일하는 방식의 혁신", year: "2025" },
        { venue: "구름(Goorm), 인하대학교", topic: "AI 트렌드와 개발자 역량", year: "2024" },
        { venue: "DGIST, 대구가톨릭대학교", topic: "데이터 엔지니어링", year: "2022" },
        { venue: "워싱턴 교육기관", topic: "전문가 및 학생 대상 워크숍과 강연", year: "2023" },
        { venue: "42 경산", topic: "개발자 멘토링", year: "2024" }
    ],
    programs: [
        { name: "Smart Career 프로젝트", period: "2019.05 - 2019.08", partner: "백엔드 개발 (Python, Graph Database, Django)" },
        { name: "Smart Career 웹 개발", period: "2021.09 - 2021.12", partner: "대구가톨릭대학교" },
        { name: "Smart Career 개발", period: "2021.11 - 2022.02", partner: "대학생성경읽기선교회" },
        { name: "미국 노동부 데이터 분석", period: "2022.06 - 2022.08", partner: "대구가톨릭대학교" },
        { name: "미국 노동부 데이터 분석", period: "2022.06 - 2022.08", partner: "영남대학교" },
        { name: "미국 노동부 데이터 분석", period: "2022.06 - 2022.08", partner: "DGIST" },
        { name: "Gen AI + RAG 서비스 구축", period: "2023.08 - 2023.10", partner: "대구가톨릭대학교" },
        { name: "Gen AI + RAG 서비스 구축", period: "2023.06 - 2023.08", partner: "DGIST" }
    ],
    skills: [
        { name: "프로그래밍", skills: ["Python", "TypeScript", "JavaScript", "SQL", "Shell Script", "Next.js"] },
        { name: "AI & ML", skills: ["LangChain", "LangGraph", "CrewAI", "RAG", "GraphRAG", "Google Gemini", "Hugging Face", "TensorFlow.js", "PyTorch", "Vertex AI"] },
        { name: "웹 개발", skills: ["React", "Next.js", "Node.js", "Express", "Flask", "Vite", "Tailwind CSS", "Material UI"] },
        { name: "데이터베이스", skills: ["PostgreSQL", "Supabase", "MongoDB", "Firebase", "Neo4j", "MS SQL Server", "MySQL", "Pinecone", "QDrant"] },
        { name: "클라우드 & DevOps", skills: ["GCP", "AWS", "Firebase", "Cloud Run", "Docker", "Ansible", "Chef", "Terraform"] },
        { name: "빅데이터", skills: ["Apache Druid", "Apache Spark", "Apache Kafka", "Hadoop", "ETL Pipelines"] },
        { name: "분석 & BI", skills: ["Grafana", "Power BI", "Tableau", "SSRS", "SSIS"] }
    ],
    education: [
        { institution: "광운대학교", degree: "석사", field: "전자공학 (AI)" },
        { institution: "Bellevue College", degree: "수료증", field: "비즈니스 인텔리전스" }
    ],
    social: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/jaehee-song-happy/" },
        { name: "Medium", url: "https://medium.com/@jsong_49820" },
        { name: "Brunch", url: "https://brunch.co.kr/@abrahamsong" }
    ],
    contact: {
        email: "info@koreatous.com"
    }
};
