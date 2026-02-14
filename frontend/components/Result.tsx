import { useEffect, useState } from 'react';
import { getResult } from '../app/util/result';
import Link from 'next/link';

import { useLanguage } from '../context/LanguageContext';

export default function Result({
  answers,
  testId,
}: {
  answers: any;
  testId: number;
}) {
  const [data, setData] = useState<null | IData>(null);
  const [isLoading, setLoading] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    setLoading(true);
    getResult(testId, answers).then((data: IData) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  const getLocalizedProfessionTitle = (prof: IProfession) => {
    const p = prof as any;
    if (language === 'ru') return p.titleRu || p.title_ru || p.title;
    if (language === 'kk') return p.titleKz || p.title_kz || p.title;
    return p.title;
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <svg
              style={{ width: '24px', height: '24px', animation: 'spin 1s linear infinite' }}
              viewBox="0 0 24 24"
            >
              <circle
                style={{ opacity: 0.25 }}
                cx="12"
                cy="12"
                r="10"
                stroke="var(--dark-grey)"
                strokeWidth="4"
                fill="none"
              ></circle>
              <path
                style={{ opacity: 0.75 }}
                fill="var(--primary-red)"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span
              style={{
                fontSize: 'var(--h2-size)',
                fontWeight: 'var(--weight-bold)',
                color: 'var(--primary-black)',
              }}
            >
              {t('result.loading')}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (!data)
    return (
      <p
        style={{
          textAlign: 'center',
          color: 'var(--primary-red)',
          fontSize: 'var(--h2-size)',
        }}
      >
        {t('result.error')}
      </p>
    );

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
        {t('result.title')}
      </h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'var(--card-bg)',
          color: 'var(--primary-black)',
          fontSize: 'var(--h2-size)',
          fontWeight: 'var(--weight-black)',
          padding: 'var(--spacing-xl)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-card)',
          marginBottom: 'var(--spacing-md)',
        }}
      >
        <p>
          {t('result.hollandCode')}: <span style={{ color: 'var(--primary-red)' }}>{data.hollandCode}</span>
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          color: 'var(--dark-grey)',
          marginBottom: 'var(--spacing-lg)',
        }}
      >
        <p style={{ paddingTop: 'var(--spacing-xs)' }}>
          {t('result.noIdea')}
          <Link
            href="/about"
            target="_blank"
            style={{
              marginLeft: 'var(--spacing-xs)',
              color: 'var(--primary-red)',
              textDecoration: 'underline',
              fontWeight: 'var(--weight-bold)',
            }}
          >
            {t('result.readMore')}
          </Link>
        </p>
      </div>

      <div style={{ paddingTop: 'var(--spacing-md)', textAlign: 'center' }}>
        <p
          style={{
            color: 'var(--dark-grey)',
            fontSize: 'var(--body-size)',
            fontStyle: 'italic',
            marginBottom: 'var(--spacing-xl)',
          }}
        >
          {t('result.description')}
        </p>

        <div
          style={{
            backgroundColor: 'var(--card-bg)',
            marginBottom: 'var(--spacing-lg)',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <h2
            style={{
              color: 'var(--primary-black)',
              paddingTop: 'var(--spacing-md)',
              textAlign: 'center',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            {t('result.exact')}
          </h2>
          <div
            style={{
              paddingTop: 'var(--spacing-md)',
              paddingBottom: 'var(--spacing-md)',
              color: 'var(--dark-grey)',
              fontSize: 'var(--body-size)',
            }}
          >
            {data.exactProfessions.length > 0 ? (
              data.exactProfessions.map((prof: IProfession) => (
                <p
                  style={{ paddingBottom: 'var(--spacing-xs)' }}
                  key={prof.id}
                >
                  {getLocalizedProfessionTitle(prof)} ({prof.hollandCode})
                </p>
              ))
            ) : (
              <p>{t('result.noExact')}</p>
            )}
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'var(--card-bg)',
            marginBottom: 'var(--spacing-lg)',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <h2
            style={{
              color: 'var(--primary-black)',
              paddingTop: 'var(--spacing-md)',
              textAlign: 'center',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            {t('result.similar')}
          </h2>
          <div
            style={{
              paddingTop: 'var(--spacing-md)',
              paddingBottom: 'var(--spacing-md)',
              color: 'var(--dark-grey)',
              fontSize: 'var(--body-size)',
            }}
          >
            {data.similarProfessions.map((prof: IProfession) => {
              return (
                <p
                  style={{ paddingBottom: 'var(--spacing-xs)' }}
                  key={prof.id}
                >
                  {getLocalizedProfessionTitle(prof)} ({prof.hollandCode})
                </p>
              );
            })}
          </div>
        </div>

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
