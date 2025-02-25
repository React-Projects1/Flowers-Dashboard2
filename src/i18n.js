import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationAR from './locales/ar.json';
import translationES from './locales/es.json';
import translationDE from './locales/de.json';
import translationFR from './locales/fr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ar: {
      translation: translationAR,
    },
    es: {
      translation: translationES,
    },
    de: {
      translation: translationDE,
    },
    fr: {
      translation: translationFR,
    },
  },
  lng: 'en', 
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
