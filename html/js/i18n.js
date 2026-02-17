'use strict';

const i18n = {
    currentLang: localStorage.getItem('lang') || 'en',

    t(key) {
        const dict = window.dictionaries[this.currentLang];
        const keys = key.split('.');
        let value = dict;

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key;
            }
        }
        return value;
    },

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        this.updateUI();
    },

    updateUI() {
        // Find all elements with data-t attribute
        document.querySelectorAll('[data-t]').forEach(el => {
            const key = el.getAttribute('data-t');
            const translation = this.t(key);

            if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
                el.placeholder = translation;
            } else {
                el.innerHTML = translation;
            }
        });

        // Update active class on language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update document language
        document.documentElement.lang = this.currentLang;

        // Custom events for components that need to re-render
        const event = new CustomEvent('languageChanged', { detail: this.currentLang });
        document.dispatchEvent(event);
    }
};

window.i18n = i18n;

document.addEventListener('DOMContentLoaded', () => {
    i18n.updateUI();
});
