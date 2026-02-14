'use client';

import { useState } from 'react';
import Result from './Result';

import { useLanguage } from '../context/LanguageContext';

export default function Quiz(props: IQuizProps) {
  const { language, t } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<IQuestionAnswers>>([]);

  const currentQuestion = props.questions
    ? props.questions[currentQuestionIndex]
    : null;
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (answer: boolean) => {
    if (!currentQuestion) {
      return;
    }
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      const answeredQuestion: IQuestionAnswers = {
        questionAnswers: new Map([[currentQuestion, answer]]),
      };
      updatedAnswers[currentQuestionIndex] = answeredQuestion;
      return updatedAnswers;
    });

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < props.questions?.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  const getLocalizedQuestionText = () => {
    if (!currentQuestion) return '';
    const q = currentQuestion as any;
    if (language === 'ru') return q.textRu || q.text_ru || q.text;
    if (language === 'kk') return q.textKz || q.text_kz || q.text;
    return q.text;
  };

  return (
    <>
      {!showResult && (
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: 'var(--spacing-xl)',
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
            {t('quiz.title')}
          </h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--light-grey)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-card)',
              padding: 'var(--spacing-xl)',
            }}
          >
            <h4
              style={{
                marginTop: 'var(--spacing-md)',
                fontSize: 'var(--h3-size)',
                fontWeight: 'var(--weight-bold)',
                color: 'var(--dark-grey)',
              }}
            >
              {t('quiz.questionCount')
                .replace('{current}', (currentQuestionIndex + 1).toString())
                .replace('{total}', (props.questions?.length || 0).toString())}
            </h4>
            <div
              style={{
                marginTop: 'var(--spacing-lg)',
                fontSize: 'var(--h2-size)',
                fontWeight: 'var(--weight-bold)',
                color: 'var(--primary-black)',
                paddingLeft: 'var(--spacing-lg)',
                paddingRight: 'var(--spacing-lg)',
                textAlign: 'center',
              }}
            >
              {getLocalizedQuestionText()}
            </div>
            <div
              style={{
                display: 'flex',
                padding: 'var(--spacing-md)',
                margin: 'var(--spacing-xl)',
                gap: 'var(--spacing-lg)',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  style={{ width: '24px', height: '24px' }}
                  name="answer"
                  key={`yes-${currentQuestionIndex}`}
                  onClick={() => handleAnswerClick(true)}
                />
                <label
                  style={{
                    marginLeft: 'var(--spacing-xs)',
                    fontSize: 'var(--body-size)',
                    fontWeight: 'var(--weight-bold)',
                    color: 'var(--primary-black)',
                    cursor: 'pointer',
                  }}
                >
                  {t('quiz.yes')}
                </label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  style={{ width: '24px', height: '24px' }}
                  name="answer"
                  key={`no-${currentQuestionIndex}`}
                  onClick={() => handleAnswerClick(false)}
                />
                <label
                  style={{
                    marginLeft: 'var(--spacing-xs)',
                    fontSize: 'var(--body-size)',
                    fontWeight: 'var(--weight-bold)',
                    color: 'var(--primary-black)',
                    cursor: 'pointer',
                  }}
                >
                  {t('quiz.no')}
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {showResult && <Result testId={props.testId} answers={answers} />}
    </>
  );
}
