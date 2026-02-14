'use client';

import TestList from '../../components/TestList';
import getTests from '../util/tests';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function Tests() {
  const [tests, setTests] = useState<any>(null);
  const { t } = useLanguage();

  useEffect(() => {
    getTests().then(setTests);
  }, []);

  if (!tests) return null;

  return (
    <>
      <h1 className="text-center font-bold text-[#f8f8f8] text-6xl mt-6 mb-20">
        {t('tests.available')}
      </h1>
      <TestList tests={tests._embedded.hollandCodeTests} />
    </>
  );
}
