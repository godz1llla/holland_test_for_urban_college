'use client';

import { useLanguage } from '../../context/LanguageContext';
import { useRouter } from 'next/navigation';

export default function CTASection() {
    const { t } = useLanguage();
    const router = useRouter();

    const handleStartTest = () => {
        router.push('/tests');
    };

    return (
        <section
            style={{
                paddingTop: 'var(--spacing-xl)',
                paddingBottom: 'var(--spacing-xl)',
                backgroundColor: 'var(--primary-red)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background pattern */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.1,
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                }}
            />

            <div
                style={{
                    maxWidth: '48rem',
                    width: '100%',
                    margin: '0 auto',
                    paddingLeft: 'var(--spacing-xl)',
                    paddingRight: 'var(--spacing-xl)',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    <h2
                        style={{
                            color: 'var(--card-bg)',
                            marginBottom: 'var(--spacing-md)',
                        }}
                    >
                        {t('landing.cta.title')}
                    </h2>

                    <p
                        style={{
                            fontSize: '1.125rem',
                            color: 'rgba(255, 255, 255, 0.9)',
                            marginBottom: 'var(--spacing-lg)',
                            lineHeight: 1.7,
                        }}
                    >
                        {t('landing.cta.subtitle')}
                    </p>

                    <button
                        onClick={handleStartTest}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '1rem 2.5rem',
                            backgroundColor: 'var(--card-bg)',
                            color: 'var(--primary-red)',
                            fontWeight: 700,
                            fontSize: '1.125rem',
                            borderRadius: 'var(--radius-lg)',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                        }}
                    >
                        {t('landing.cta.button')}
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
                </div>
            </div>
        </section>
    );
}
