import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // react: {
        //     useSuspense: false
        // },
        
        resources: {
            ua: {
                translation: {
                    "tabBar": {
                        "Instraction": "Інструкція",
                        "Letter": "Літери",
                        "Syllable": "Склади",
                        "Words": "Слова",
                        "Language": "Мова",
                    },
                    "videoBlock": {
                        "Play/pause": "старт/стоп",
                        "Pronounce": "Вимова"
                    }, 
                }
            },
            ru: {
                translation: {
                    "tabBar": {
                        "Instraction": "Инструкция",
                        "Letter": "Буквы",
                        "Syllable": "Слоги",
                        "Words": "Слова",
                        "Language": "Язык",
                    },
                    "videoBlock": {
                        "Play/pause": "старт/стоп",
                        "Pronounce": "Произношение"
                    },
                }
            },
            en: {
                translation: {
                    "tabBar": {
                        "Instraction": "Instraction",
                        "Letter": "Letter",
                        "Syllable": "Syllables",
                        "Words": "Words",
                        "Language": "Language",
                    },
                    "videoBlock": {
                        "Play/pause": "Play/pause",
                        "Pronounce": "Pronounce"
                    },
                }
            }
        },
        
        fallbackLng: "en",
        //lng: "ru",

        interpolation: {
            escapeValue: false, // not needed for react!!
        },
})

export default i18n;