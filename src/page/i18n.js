import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../components/translation/translation_en.json'; 
import translationDE from '../components/translation/translation_de.json'
import translationRU from '../components/translation/translation_ru.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      de: { translation: translationDE },
      ru: { translation: translationRU }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
