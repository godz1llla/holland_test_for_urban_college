'use client';

import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
    const { t } = useLanguage();
    const router = useRouter();

    const handleStartTest = () => {
        router.push('/tests');
    };

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            style={{
                position: 'relative',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'var(--bg-light)',
                overflow: 'hidden',
            }}
        >
            {/* Background decoration */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.05,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '5rem',
                        right: '5rem',
                        width: '24rem',
                        height: '24rem',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-red)',
                        filter: 'blur(80px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '5rem',
                        left: '5rem',
                        width: '20rem',
                        height: '20rem',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-green)',
                        filter: 'blur(80px)',
                    }}
                />
            </div>

            <div
                style={{
                    maxWidth: '80rem',
                    width: '100%',
                    margin: '0 auto',
                    paddingLeft: 'var(--spacing-xl)',
                    paddingRight: 'var(--spacing-xl)',
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        maxWidth: '56rem',
                        padding: '6rem 0',
                    }}
                >
                    <span
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            backgroundColor: 'rgba(225, 37, 83, 0.1)',
                            color: 'var(--primary-red)',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            borderRadius: '9999px',
                            marginBottom: 'var(--spacing-md)',
                        }}
                    >
                        {t('landing.hero.badge')}
                    </span>

                    <h1
                        style={{
                            marginBottom: 'var(--spacing-md)',
                            fontSize: '2.5rem',
                            lineHeight: 1.2,
                        }}
                    >
                        {t('landing.hero.title')}{' '}
                        <span style={{ color: 'var(--primary-red)' }}>
                            {t('landing.hero.titleHighlight')}
                        </span>
                    </h1>

                    <p
                        style={{
                            fontSize: '1.125rem',
                            color: 'var(--dark-grey)',
                            marginBottom: 'var(--spacing-lg)',
                            lineHeight: 1.7,
                        }}
                    >
                        {t('landing.hero.subtitle')}
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-sm)',
                            marginBottom: 'var(--spacing-xl)',
                        }}
                    >
                        {['free', 'fast', 'recommendations'].map((key) => (
                            <div
                                key={key}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '0.75rem',
                                }}
                            >
                                <div
                                    style={{
                                        flexShrink: 0,
                                        width: '1.5rem',
                                        height: '1.5rem',
                                        backgroundColor: 'var(--accent-green)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--card-bg)',
                                        marginTop: '0.125rem',
                                    }}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <p style={{ fontSize: '1.125rem', color: 'var(--foreground-color)' }}>
                                    {t(`landing.hero.advantages.${key}`)}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 'var(--spacing-sm)',
                        }}
                    >
                        <button
                            onClick={handleStartTest}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '1rem 2rem',
                                backgroundColor: 'var(--primary-red)',
                                color: 'var(--card-bg)',
                                fontWeight: 700,
                                fontSize: '1rem',
                                borderRadius: 'var(--radius-lg)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.opacity = '0.9';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.opacity = '1';
                            }}
                        >
                            {t('landing.hero.cta')}
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M5 12h14m-7-7 7 7-7 7" />
                            </svg>
                        </button>

                        <button
                            onClick={scrollToAbout}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '1rem 2rem',
                                border: '1px solid var(--primary-red)',
                                backgroundColor: 'transparent',
                                color: 'var(--primary-red)',
                                fontWeight: 700,
                                fontSize: '1rem',
                                borderRadius: 'var(--radius-lg)',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(225, 37, 83, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            {t('landing.hero.learnMore')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
