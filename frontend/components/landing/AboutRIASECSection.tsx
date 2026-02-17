'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function AboutRIASECSection() {
    const { t } = useLanguage();

    const types = [
        { key: 'realistic', icon: 'r', color: '#E12553' },
        { key: 'investigative', icon: 'i', color: '#27A38A' },
        { key: 'artistic', icon: 'a', color: '#50318F' },
        { key: 'social', icon: 's', color: '#FFB030' },
        { key: 'enterprising', icon: 'e', color: '#E12553' },
        { key: 'conventional', icon: 'c', color: '#27A38A' },
    ];

    return (
        <section
            id="about"
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
                    <h2>{t('landing.about.title')}</h2>
                    <p
                        style={{
                            color: 'var(--dark-grey)',
                            maxWidth: '42rem',
                            margin: '1rem auto 0',
                            lineHeight: 1.7,
                        }}
                    >
                        {t('landing.about.description')}
                    </p>
                </div>

                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: 'var(--spacing-lg)',
                        marginTop: 'var(--spacing-xl)',
                    }}
                >
                    <h3>{t('landing.about.types')}</h3>
                    <p
                        style={{
                            color: 'var(--dark-grey)',
                            fontSize: '0.875rem',
                            marginTop: 'var(--spacing-xs)',
                        }}
                    >
                        {t('landing.about.typesSubtitle')}
                    </p>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'var(--spacing-md)',
                    }}
                >
                    {types.map((type) => (
                        <div
                            key={type.key}
                            style={{
                                backgroundColor: 'var(--bg-light)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--spacing-md)',
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
                                    width: '3rem',
                                    height: '3rem',
                                    borderRadius: '50%',
                                    backgroundColor: type.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--card-bg)',
                                    fontSize: '1.5rem',
                                    fontWeight: 900,
                                    marginBottom: 'var(--spacing-sm)',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {type.icon}
                            </div>
                            <h4
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    marginBottom: 'var(--spacing-xs)',
                                    color: 'var(--primary-black)',
                                }}
                            >
                                {t(`about.types.${type.key}.title`)}
                            </h4>
                            <p
                                style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--dark-grey)',
                                    lineHeight: 1.6,
                                }}
                            >
                                {t(`about.types.${type.key}.desc`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
