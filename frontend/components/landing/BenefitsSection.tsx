'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function BenefitsSection() {
    const { t } = useLanguage();

    const benefits = [
        {
            key: 'scientific',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
            ),
        },
        {
            key: 'fast',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
        },
        {
            key: 'multilingual',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
        },
        {
            key: 'free',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
            ),
        },
    ];

    return (
        <section
            style={{
                paddingTop: 'var(--spacing-xl)',
                paddingBottom: 'var(--spacing-xl)',
                backgroundColor: 'var(--card-bg)',
            }}
        >
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
                        textAlign: 'center',
                        marginBottom: 'var(--spacing-xl)',
                    }}
                >
                    <h2>{t('landing.benefits.title')}</h2>
                    <p
                        style={{
                            color: 'var(--dark-grey)',
                            maxWidth: '42rem',
                            margin: '1rem auto 0',
                        }}
                    >
                        {t('landing.benefits.subtitle')}
                    </p>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'var(--spacing-lg)',
                    }}
                >
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.key}
                            style={{
                                backgroundColor: 'var(--bg-light)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--spacing-lg)',
                                textAlign: 'center',
                                border: '1px solid var(--light-grey)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div
                                style={{
                                    width: '5rem',
                                    height: '5rem',
                                    margin: '0 auto var(--spacing-md)',
                                    borderRadius: 'var(--radius-lg)',
                                    background: 'linear-gradient(135deg, rgba(225, 37, 83, 0.1), rgba(39, 163, 138, 0.1))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary-red)',
                                }}
                            >
                                {benefit.icon}
                            </div>

                            <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>
                                {t(`landing.benefits.${benefit.key}.title`)}
                            </h3>

                            <p
                                style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--dark-grey)',
                                    lineHeight: 1.6,
                                }}
                            >
                                {t(`landing.benefits.${benefit.key}.description`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
