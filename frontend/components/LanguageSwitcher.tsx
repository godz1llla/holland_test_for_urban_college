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
        <div className="fixed top-4 right-4 z-50 flex space-x-2 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 shadow-xl">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 ${language === lang.code
                            ? 'bg-white/30 text-white shadow-inner'
                            : 'text-white/60 hover:text-white hover:bg-white/10'
                        }`}
                    title={lang.label}
                >
                    <span className="text-xl">{lang.flag}</span>
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
