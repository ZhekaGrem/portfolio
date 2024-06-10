import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { uk } from "./data/uk";
import { en } from "./data/en";

const resources = {
  en: {
    translation:en,
  },
  uk: {
    translation: uk,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
