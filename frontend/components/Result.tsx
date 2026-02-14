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
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-2xl mx-auto">
          <button type="button" disabled>
            <div className="flex items-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="text-white text-2xl">{t('result.loading')}</span>
            </div>
          </button>
        </div>
      </div>
    );
  }

  if (!data) return <p>{t('result.error')}</p>;

  return (
    <div className="max-w-2xl mx-auto pb-20">
      <h1 className="text-center font-bold text-[#f8f8f8] text-6xl pt-6 mb-24">
        {t('result.title')}
      </h1>
      <div className="flex justify-center bg-[#ffffff2e] text-[#f8f8f8] text-3xl font-bold p-10">
        <p> {t('result.hollandCode')}: {data.hollandCode}</p>
      </div>
      <div className="flex justify-center text-[#f8f8f8]">
        <p className="pt-3">
          {t('result.noIdea')}
          <Link
            href="/about"
            target="_blank"
            className=" underline underline-offset-2 ml-2"
          >
            {t('result.readMore')}
          </Link>
        </p>
      </div>
      <div className="pt-10 px-4 text-center">
        <p className="text-[#a0a0a0] text-xl italic">
          {t('result.description')}
        </p>

        <div className="bg-[#ffffff2e] my-10 p-4 rounded-lg">
          <h2 className="text-[#f8f8f8] font-bold text-3xl pt-4 text-center">
            {t('result.exact')}
          </h2>
          <div className="py-6 text-[#cecece] text-xl text-center">
            {data.exactProfessions.length > 0 ? (
              data.exactProfessions.map((prof: IProfession) => (
                <p className="pb-2" key={prof.id}>
                  {getLocalizedProfessionTitle(prof)} ({prof.hollandCode})
                </p>
              ))
            ) : (
              <p>{t('result.noExact')}</p>
            )}
          </div>
        </div>
        <div className="bg-[#ffffff2e] mb-10 p-4 rounded-lg">
          <h2 className="text-[#f8f8f8] font-bold text-3xl pt-4 text-center">
            {t('result.similar')}
          </h2>
          <div className="py-6 text-[#cecece] text-xl text-center">
            {data.similarProfessions.map((prof: IProfession) => {
              return (
                <p className="pb-2" key={prof.id}>
                  {getLocalizedProfessionTitle(prof)} ({prof.hollandCode})
                </p>
              );
            })}
          </div>
        </div>
        <Link href="/tests">
          <button className="fixed left-4 bottom-4 bg-[#f08cc0] hover:bg-[#f08cc0e0] transition-colors text-white px-6 py-3 rounded-lg shadow-lg">
            {t('result.back')}
          </button>
        </Link>
      </div>
    </div>
  );
}
