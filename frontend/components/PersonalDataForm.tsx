'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface PersonalDataFormProps {
  id: number;
}

import { useLanguage } from '../context/LanguageContext';

const PersonalDataForm = ({ id }: PersonalDataFormProps) => {
  const router = useRouter();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: 'Male',
  });
  const [isEmailValid, setIsEmailValid] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('gender', gender);

    router.push(`/tests/${id}/quiz`);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;

    if (id === 'email') {
      setIsEmailValid(emailRegex.test(value));
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const isFormValid = Object.values(formData).every((value) => value !== '');

  const inputStyles: React.CSSProperties = {
    appearance: 'none',
    display: 'block',
    width: '100%',
    backgroundColor: 'var(--card-bg)',
    color: 'var(--primary-black)',
    border: '1px solid var(--light-grey)',
    borderRadius: 'var(--radius-md)',
    padding: 'var(--spacing-sm)',
    marginBottom: 'var(--spacing-xs)',
    fontSize: 'var(--body-size)',
    lineHeight: 'var(--lh-body)',
    transition: 'border-color 0.2s ease',
  };

  const inputFocusStyles: React.CSSProperties = {
    borderColor: 'var(--primary-red)',
    outline: 'none',
  };

  const inputErrorStyles: React.CSSProperties = {
    borderColor: 'var(--primary-red)',
  };

  const labelStyles: React.CSSProperties = {
    display: 'block',
    fontSize: 'var(--caption-size)',
    fontWeight: 'var(--weight-bold)',
    color: 'var(--primary-black)',
    marginBottom: 'var(--spacing-xs)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  const buttonStyles: React.CSSProperties = {
    backgroundColor: 'var(--primary-red)',
    color: 'var(--card-bg)',
    fontWeight: 'var(--weight-bold)',
    fontSize: 'var(--button-size)',
    lineHeight: 'var(--lh-button)',
    marginTop: 'var(--spacing-lg)',
    padding: 'var(--spacing-sm) var(--spacing-lg)',
    borderRadius: 'var(--radius-md)',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
  };

  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          marginTop: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-xl)',
          color: 'var(--primary-black)',
        }}
      >
        {t('form.title')}
      </h1>

      <div
        style={{
          backgroundColor: 'var(--card-bg)',
          maxWidth: '600px',
          margin: '0 auto',
          padding: 'var(--spacing-xl)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyles}>{t('form.firstName')}</label>
              <input
                style={inputStyles}
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={t('form.placeholders.firstName')}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyles)}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--light-grey)';
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyles}>{t('form.lastName')}</label>
              <input
                style={inputStyles}
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={t('form.placeholders.lastName')}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyles)}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--light-grey)';
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: 'var(--spacing-md)' }}>
            <label style={labelStyles}>{t('form.email')}</label>
            <input
              style={{
                ...inputStyles,
                ...(isEmailValid ? {} : inputErrorStyles),
              }}
              id="email"
              type="email"
              placeholder={t('form.placeholders.email')}
              value={formData.email}
              onChange={handleChange}
              onFocus={(e) => {
                if (isEmailValid) Object.assign(e.target.style, inputFocusStyles);
              }}
              onBlur={(e) => {
                if (isEmailValid) e.target.style.borderColor = 'var(--light-grey)';
              }}
            />
            {!isEmailValid && (
              <p
                style={{
                  color: 'var(--primary-red)',
                  fontSize: 'var(--caption-size)',
                  marginTop: 'var(--spacing-xs)',
                }}
              >
                {t('form.emailError')}
              </p>
            )}
          </div>

          <div style={{ marginBottom: 'var(--spacing-md)' }}>
            <label style={labelStyles}>{t('form.gender')}</label>
            <div style={{ position: 'relative' }}>
              <select
                style={{
                  ...inputStyles,
                  paddingRight: 'var(--spacing-lg)',
                  cursor: 'pointer',
                }}
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyles)}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--light-grey)';
                }}
              >
                <option value="Male">{t('form.genders.male')}</option>
                <option value="Female">{t('form.genders.female')}</option>
                <option value="Non-Binary">{t('form.genders.nonBinary')}</option>
                <option value="Other">{t('form.genders.other')}</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            style={{
              ...buttonStyles,
              opacity: !isFormValid || !isEmailValid ? 0.5 : 1,
              cursor: !isFormValid || !isEmailValid ? 'not-allowed' : 'pointer',
            }}
            disabled={!isFormValid || !isEmailValid}
            onMouseEnter={(e) => {
              if (isFormValid && isEmailValid) {
                e.currentTarget.style.backgroundColor = '#c71e48';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-red)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {t('form.submit')}
          </button>
        </form>
      </div>
    </>
  );
};

export default PersonalDataForm;
