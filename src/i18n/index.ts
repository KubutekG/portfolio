import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../locales/en/translation.json';
import translationsInPolish from '../locales/pl/translation.json';

// the translations
const resources = {
  en: {
    translation: translationsInEng
  },
  pl: {
    translation: translationsInPolish
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    debug: true,
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation"
  });

export default i18n;