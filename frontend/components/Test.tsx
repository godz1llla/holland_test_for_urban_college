import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Test(props: ITestProps) {
  const { test } = props;
  const [bgColor, setBgColor] = useState('');
  const router = useRouter();
  const { language, t } = useLanguage();

  useEffect(() => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 51) + 50;
    const lightness = Math.floor(Math.random() * 26) + 70;
    const randomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    setBgColor(randomColor);
  }, []);

  const handleClick = (e: any) => {
    e.preventDefault();
    const value = localStorage.getItem('email') || '';
    if (value !== '') {
      router.push(`/tests/${test.id}/quiz`);
    } else router.push(`/tests/${test.id}`);
  };

  const getLocalizedTitle = () => {
    if (language === 'ru') return test.titleRu || test.title;
    if (language === 'kk') return test.titleKz || test.title;
    return test.title;
  };

  const getLocalizedDescription = () => {
    if (language === 'ru') return test.descriptionRu || test.description;
    if (language === 'kk') return test.descriptionKz || test.description;
    return test.description;
  };

  return (
    <>
      <Link
        href={`/tests/${test.id}`}
        onClick={handleClick}
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 'var(--spacing-md)',
          textDecoration: 'none',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <div
          style={{
            width: '120px',
            minHeight: '160px',
            borderRadius: 'var(--radius-lg) 0 0 var(--radius-lg)',
            backgroundColor: bgColor,
          }}
        ></div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--light-grey)',
            borderLeft: 'none',
            borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
            boxShadow: 'var(--shadow-card)',
            padding: 'var(--spacing-md)',
            maxWidth: '600px',
            transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-light)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--card-bg)';
            e.currentTarget.style.boxShadow = 'var(--shadow-card)';
          }}
        >
          <h3
            style={{
              marginBottom: 'var(--spacing-sm)',
              color: 'var(--primary-black)',
            }}
          >
            {getLocalizedTitle()}
          </h3>
          <p
            style={{
              marginBottom: 'var(--spacing-xs)',
              fontSize: 'var(--body-size)',
              color: 'var(--dark-grey)',
              lineHeight: 'var(--lh-body)',
            }}
          >
            {getLocalizedDescription()}
          </p>
          <p
            style={{
              fontSize: 'var(--caption-size)',
              color: 'var(--grey)',
              lineHeight: 'var(--lh-caption)',
            }}
          >
            {t('tests.version')}: {test.version}
          </p>
        </div>
      </Link>
    </>
  );
}
