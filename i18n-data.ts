import type { Lang } from './i18n';

interface UIStrings {
    navAbout: string;
    navCareer: string;
    navProjects: string;
    navBooks: string;
    navLectures: string;
    navSkills: string;

    headingAbout: string;
    headingCareer: string;
    headingProjects: string;
    headingBooks: string;
    headingLectures: string;
    headingPrograms: string;
    headingSkills: string;
    headingEducation: string;

    projectsSubtitle: string;
    programsSubtitle: string;

    btnLinkedIn: string;
    btnGetInTouch: string;
    btnVisit: string;

    footerDescription: string;
    footerServices: string;
    footerAffiliations: string;
    footerConnect: string;
    footerAboutFounder: string;
    footerAllRights: string;
    footerPrivacy: string;
    footerTerms: string;

    categoryAI: string;
    categoryBusiness: string;
    categoryUtilities: string;

    langToggleLabel: string;
}

const strings: Record<Lang, UIStrings> = {
    en: {
        navAbout: 'About',
        navCareer: 'Career',
        navProjects: 'Projects',
        navBooks: 'Books',
        navLectures: 'Lectures',
        navSkills: 'Skills',

        headingAbout: 'About',
        headingCareer: 'Career',
        headingProjects: 'Web Services',
        headingBooks: 'Publications',
        headingLectures: 'Lectures & Speaking',
        headingPrograms: 'Global Internship Programs',
        headingSkills: 'Skills & Technologies',
        headingEducation: 'Education',

        projectsSubtitle: "Production AI services and tools I've designed and built.",
        programsSubtitle: 'Trained 60+ students across Korea and the US through structured technical programs.',

        btnLinkedIn: 'LinkedIn Profile',
        btnGetInTouch: 'Get in Touch',
        btnVisit: 'Visit',

        footerDescription: 'Data Platform Architect & AI Solution Developer. Building production-grade AI services and accelerating startups.',
        footerServices: 'Services',
        footerAffiliations: 'Affiliations',
        footerConnect: 'Connect',
        footerAboutFounder: 'About Founder',
        footerAllRights: 'All rights reserved.',
        footerPrivacy: 'Privacy Policy',
        footerTerms: 'Terms of Service',

        categoryAI: 'AI & ML',
        categoryBusiness: 'Business',
        categoryUtilities: 'Utilities',

        langToggleLabel: 'KO',
    },
    ko: {
        navAbout: '소개',
        navCareer: '경력',
        navProjects: '프로젝트',
        navBooks: '저서',
        navLectures: '강연',
        navSkills: '기술',

        headingAbout: '소개',
        headingCareer: '경력',
        headingProjects: '웹 서비스',
        headingBooks: '저서 & 출판',
        headingLectures: '강연 & 발표',
        headingPrograms: '글로벌 인턴십 프로그램',
        headingSkills: '기술 스택',
        headingEducation: '학력',

        projectsSubtitle: '직접 설계하고 구축한 프로덕션 AI 서비스 및 도구입니다.',
        programsSubtitle: '한국과 미국에서 60명 이상의 학생들을 체계적인 기술 프로그램을 통해 교육했습니다.',

        btnLinkedIn: 'LinkedIn 프로필',
        btnGetInTouch: '연락하기',
        btnVisit: '방문하기',

        footerDescription: '데이터 플랫폼 아키텍트 & AI 솔루션 개발자. 프로덕션급 AI 서비스를 구축하고 스타트업을 지원합니다.',
        footerServices: '서비스',
        footerAffiliations: '소속',
        footerConnect: '연락처',
        footerAboutFounder: '창립자 소개',
        footerAllRights: '모든 권리 보유.',
        footerPrivacy: '개인정보처리방침',
        footerTerms: '이용약관',

        categoryAI: 'AI & ML',
        categoryBusiness: '비즈니스',
        categoryUtilities: '유틸리티',

        langToggleLabel: 'EN',
    },
};

export function t(lang: Lang): UIStrings {
    return strings[lang];
}
