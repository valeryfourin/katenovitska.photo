import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const fallbackLng = ['es']; 
const availableLanguages = ['es', 'en'];

i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step

  .use(LanguageDetector) // detect user language

  .use(initReactI18next) // pass the i18n instance to react-i18next.

  .init({
    fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    debug: false,
    whitelist: availableLanguages,
    react: {
      useSuspense: false
    },
    
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;



// import i18n from "i18next";
// import detector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

// import translationEN from './locales/en/translation.json';
// import translationRU from './locales/ru/translation.json';

// // the translations
// const resources = {
//   en: {
//     translation: translationEN
//   },
//   ru: {
//     translation: translationRU
//   }
// };

// i18n
//   .use(detector)
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources,
//     fallbackLng: "ru", // use ru if detected lng is not available

//     keySeparator: false, // we do not use keys in form messages.welcome

//     interpolation: {
//       escapeValue: false // react already safes from xss
//     }
//   });

// export default i18n;