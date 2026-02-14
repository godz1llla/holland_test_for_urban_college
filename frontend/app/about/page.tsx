'use client';

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto pb-20">
      <h1 className="text-center font-bold text-[#f8f8f8] text-5xl pt-6 mb-20">
        {t('about.title')}
      </h1>
      <div className="flex flex-col justify-center bg-[#ffffff2e] text-[#f8f8f8] text-3xl p-10 rounded-lg">
        <h2 className="text-center mb-10">{t('about.riasec')}</h2>
        <p className="text-center flex flex-wrap justify-center gap-4">
          <span><span className="font-bold">R</span>{t('about.categories.r').substring(1)}</span>
          <span><span className="font-bold">I</span>{t('about.categories.i').substring(1)}</span>
          <span><span className="font-bold">A</span>{t('about.categories.a').substring(1)}</span>
          <span><span className="font-bold">S</span>{t('about.categories.s').substring(1)}</span>
          <span><span className="font-bold">E</span>{t('about.categories.e').substring(1)}</span>
          <span><span className="font-bold">C</span>{t('about.categories.c').substring(1)}</span>
        </p>
      </div>
      <div className="pt-8 px-4">
        <p className="text-[#a0a0a0] leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.description') }}></p>
        <p className="text-[#a0a0a0] mt-4">
          <Link href="/tests" className="text-[#f08cc0] hover:underline">
            {t('about.selfAssessment')}
          </Link>
        </p>

        <h2 className="text-[#f8f8f8] font-bold text-4xl pt-12 text-center">
          {t('about.personalities')}
        </h2>

        <div className="flex flex-col justify-center pt-10">
          <h3 className="text-2xl text-[#f8f8f8] font-semibold">{t('about.types.realistic.title')}</h3>
          <p className="pt-2 text-[#a0a0a0]">
            {t('about.types.realistic.desc')}
          </p>
        </div>

        <div className="flex flex-col justify-center pt-10">
          <h3 className="text-2xl text-[#f8f8f8] font-semibold">{t('about.types.investigative.title')}</h3>
          <p className="pt-2 text-[#a0a0a0]">
            {t('about.types.investigative.desc')}
          </p>
        </div>

        <div className="flex flex-col justify-center pt-10">
          <h3 className="text-2xl text-[#f8f8f8] font-semibold">{t('about.types.artistic.title')}</h3>
          <p className="pt-2 text-[#a0a0a0]">
            {t('about.types.artistic.desc')}
          </p>
        </div>

        <div className="flex flex-col justify-center pt-10">
          <h3 className="text-2xl text-[#f8f8f8] font-semibold">{t('about.types.social.title')}</h3>
          <p className="pt-2 text-[#a0a0a0]">
            {t('about.types.social.desc')}
          </p>
        </div>

        <div className="flex flex-col justify-center pt-10">
          <h3 className="text-2xl text-[#f8f8f8] font-semibold">{t('about.types.enterprising.title')}</h3>
          <p className="pt-2 text-[#a0a0a0]">
            {t('about.types.enterprising.desc')}
          </p>
        </div>

        <div className="flex flex-col justify-center pt-10">
          <h3 className="text-2xl text-[#f8f8f8] font-semibold">{t('about.types.conventional.title')}</h3>
          <p className="pt-2 text-[#a0a0a0]">
            {t('about.types.conventional.desc')}
          </p>
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
