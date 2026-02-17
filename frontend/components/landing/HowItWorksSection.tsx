'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function HowItWorksSection() {
    const { t } = useLanguage();

    const steps = [
        {
            number: '01',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
            titleKey: 'step1.title',
            descKey: 'step1.description',
        },
        {
            number: '02',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
            ),
            titleKey: 'step2.title',
            descKey: 'step2.description',
        },
        {
            number: '03',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            ),
            titleKey: 'step3.title',
            descKey: 'step3.description',
        },
    ];

    return (
        <section
            style={{
                paddingTop: 'var(--spacing-xl)',
                paddingBottom: 'var(--spacing-xl)',
                backgroundColor: 'var(--bg-light)',
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
                    <h2>{t('landing.howItWorks.title')}</h2>
                    <p
                        style={{
                            color: 'var(--dark-grey)',
                            maxWidth: '42rem',
                            margin: '1rem auto 0',
                        }}
                    >
                        {t('landing.howItWorks.subtitle')}
                    </p>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: 'var(--spacing-lg)',
                        alignItems: 'center',
                    }}
                >
                    {steps.map((step, index) => (
                        <div key={step.number} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div
                                style={{
                                    backgroundColor: 'var(--card-bg)',
                                    borderRadius: 'var(--radius-lg)',
                                    padding: 'var(--spacing-lg)',
                                    textAlign: 'center',
                                    boxShadow: 'var(--shadow-card)',
                                    width: '100%',
                                    position: 'relative',
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: '4rem',
                                        fontWeight: 900,
                                        color: 'var(--light-grey)',
                                        lineHeight: 1,
                                        marginBottom: 'var(--spacing-sm)',
                                    }}
                                >
                                    {step.number}
                                </div>

                                <div
                                    style={{
                                        width: '4rem',
                                        height: '4rem',
                                        margin: '0 auto var(--spacing-sm)',
                                        borderRadius: 'var(--radius-lg)',
                                        backgroundColor: 'rgba(225, 37, 83, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--primary-red)',
                                    }}
                                >
                                    {step.icon}
                                </div>

                                <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>
                                    {t(`landing.howItWorks.${step.titleKey}`)}
                                </h3>

                                <p
                                    style={{
                                        fontSize: '0.875rem',
                                        color: 'var(--dark-grey)',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {t(`landing.howItWorks.${step.descKey}`)}
                                </p>
                            </div>

                            {/* Arrow between steps */}
                            {index < steps.length - 1 && (
                                <div
                                    style={{
                                        display: 'none',
                                        color: 'var(--dark-grey)',
                                        marginTop: 'var(--spacing-md)',
                                    }}
                                    className="step-arrow"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14m-7-7 7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
