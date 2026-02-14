'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const languages = [
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'ru', label: 'Русский', flag: '🇷🇺' },
        { code: 'kk', label: 'Қазақша', flag: '🇰🇿' },
    ] as const;

    return (
        <div
            style={{
                position: 'fixed',
                top: 'var(--spacing-md)',
                right: 'var(--spacing-md)',
                zIndex: 1000,
                display: 'flex',
                gap: 'var(--spacing-xs)',
                backgroundColor: 'var(--card-bg)',
                padding: 'var(--spacing-xs)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--light-grey)',
                boxShadow: 'var(--shadow-card)',
            }}
        >
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        border: language === lang.code ? `2px solid var(--primary-red)` : '2px solid transparent',
                        backgroundColor: language === lang.code ? 'var(--bg-light)' : 'transparent',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontSize: '20px',
                    }}
                    title={lang.label}
                    onMouseEnter={(e) => {
                        if (language !== lang.code) {
                            e.currentTarget.style.backgroundColor = 'var(--bg-light)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (language !== lang.code) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }
                    }}
                >
                    <span>{lang.flag}</span>
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
