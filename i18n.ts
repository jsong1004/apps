export type Lang = 'en' | 'ko';

const STORAGE_KEY = 'portfolio-lang';

let currentLang: Lang = loadLang();
let renderCallback: (() => void) | null = null;

function loadLang(): Lang {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'en' || stored === 'ko') return stored;
    } catch { /* localStorage unavailable */ }
    return 'en';
}

export function getLang(): Lang {
    return currentLang;
}

export function setLang(lang: Lang): void {
    if (lang === currentLang) return;
    currentLang = lang;
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch { /* localStorage unavailable */ }
    document.documentElement.lang = lang;
    if (renderCallback) renderCallback();
}

export function onLangChange(callback: () => void): void {
    renderCallback = callback;
}
