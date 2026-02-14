'use client';

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        paddingBottom: 'var(--spacing-xl)',
        paddingLeft: 'var(--spacing-md)',
        paddingRight: 'var(--spacing-md)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          paddingTop: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-xl)',
          color: 'var(--primary-black)',
        }}
      >
        {t('about.title')}
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'var(--card-bg)',
          color: 'var(--primary-black)',
          fontSize: 'var(--h2-size)',
          padding: 'var(--spacing-xl)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-card)',
          marginBottom: 'var(--spacing-lg)',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
          {t('about.riasec')}
        </h2>
        <p
          style={{
            textAlign: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'var(--spacing-sm)',
            fontSize: 'var(--h3-size)',
            fontWeight: 'var(--weight-bold)',
          }}
        >
          <span>
            <span style={{ color: 'var(--primary-red)' }}>R</span>
            {t('about.categories.r').substring(1)}
          </span>
          <span>
            <span style={{ color: 'var(--primary-red)' }}>I</span>
            {t('about.categories.i').substring(1)}
          </span>
          <span>
            <span style={{ color: 'var(--primary-red)' }}>A</span>
            {t('about.categories.a').substring(1)}
          </span>
          <span>
            <span style={{ color: 'var(--primary-red)' }}>S</span>
            {t('about.categories.s').substring(1)}
          </span>
          <span>
            <span style={{ color: 'var(--primary-red)' }}>E</span>
            {t('about.categories.e').substring(1)}
          </span>
          <span>
            <span style={{ color: 'var(--primary-red)' }}>C</span>
            {t('about.categories.c').substring(1)}
          </span>
        </p>
      </div>

      <div style={{ paddingTop: 'var(--spacing-md)', paddingLeft: 'var(--spacing-md)', paddingRight: 'var(--spacing-md)' }}>
        <p
          style={{
            color: 'var(--dark-grey)',
            lineHeight: 'var(--lh-body)',
          }}
          dangerouslySetInnerHTML={{ __html: t('about.description') }}
        ></p>
        <p style={{ color: 'var(--dark-grey)', marginTop: 'var(--spacing-md)' }}>
          <Link
            href="/tests"
            style={{
              color: 'var(--primary-red)',
              textDecoration: 'underline',
              fontWeight: 'var(--weight-bold)',
            }}
          >
            {t('about.selfAssessment')}
          </Link>
        </p>

        <h2
          style={{
            paddingTop: 'var(--spacing-xl)',
            textAlign: 'center',
            marginBottom: 'var(--spacing-lg)',
          }}
        >
          {t('about.personalities')}
        </h2>

        {['realistic', 'investigative', 'artistic', 'social', 'enterprising', 'conventional'].map((type) => (
          <div
            key={type}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingTop: 'var(--spacing-lg)',
              backgroundColor: 'var(--card-bg)',
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--radius-lg)',
              marginBottom: 'var(--spacing-md)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <h3 style={{ color: 'var(--primary-black)' }}>
              {t(`about.types.${type}.title`)}
            </h3>
            <p
              style={{
                paddingTop: 'var(--spacing-xs)',
                color: 'var(--dark-grey)',
                lineHeight: 'var(--lh-body)',
              }}
            >
              {t(`about.types.${type}.desc`)}
            </p>
          </div>
        ))}

        <Link href="/tests">
          <button
            style={{
              position: 'fixed',
              left: 'var(--spacing-md)',
              bottom: 'var(--spacing-md)',
              backgroundColor: 'var(--primary-red)',
              color: 'var(--card-bg)',
              padding: 'var(--spacing-sm) var(--spacing-md)',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              boxShadow: 'var(--shadow-card)',
              cursor: 'pointer',
              fontWeight: 'var(--weight-bold)',
              fontSize: 'var(--button-size)',
              transition: 'background-color 0.2s ease, transform 0.1s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#c71e48';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-red)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {t('result.back')}
          </button>
        </Link>
      </div>
    </div>
  );
}
