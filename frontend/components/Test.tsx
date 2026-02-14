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
    const hue = Math.floor(Math.random() * 360); // Random hue
    const saturation = Math.floor(Math.random() * 51) + 50; // 50-100% saturation
    const lightness = Math.floor(Math.random() * 26) + 70; // 70-95% lightness
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
        className="flex flex-row m-5"
        onClick={handleClick}
      >
        <div
          className={`box w-48 rounded-l-lg flex-shrink-0 drop-shadow-md`}
          style={{ backgroundColor: bgColor }}
        ></div>
        <div className="">
          <div className="flex flex-col bg-neutral-100 hover:bg-white border-t border-r border-b border-gray-200 rounded-r-lg shadow md:max-w-xl p-4">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#ce43a7]">
              {getLocalizedTitle()}
            </h2>
            <p className="mb-3 font-normal text-[#666666]">
              {getLocalizedDescription()}
            </p>
            <p className="mb-3 font-normal text-[#666666]">
              {t('tests.version')}: {test.version}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
