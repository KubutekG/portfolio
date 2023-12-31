import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../locales/en/translation.json';
import translationsInPol from '../locales/pl/translation.json';

const resources = {
  en: {
    translation: translationsInEng
  },
  pl: {
    translation: translationsInPol
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",  
    debug: false,
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation"
  });

export default i18n;