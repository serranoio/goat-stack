import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

i18n  
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "translation": "English version of this sentence.",
          "current": "Current Quote",
          "section": "Translation Section"
        }
      },
      es: {
        translation: {
          "translation": "version espanola de esta frase.",
          "current": "Cita Actual",
          "section": "Sección de Traducción"
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });