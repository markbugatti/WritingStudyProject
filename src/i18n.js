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
                    "Manual": {
                        "LetterTitle": "Закладка ЛІТЕРИ",
                        "LetterBody": {
                            "Paragraph1": "Тренажер демонструє рукописне написання всіх букв українського алфавіту, великих і малих.",
                            "Usage": "Для використання:",
                            "Point1": "Клацнути мишкою на букву. Внизу на екрані з’явиться графічне зображення процесу написання кожного елемента букви", 
                        },
                        "SyllableTitle": "Закладка СКЛАДИ",
                        "SyllableBody": {
                            "Paragraph1": "Тренажер демонструє правильне з’єднання букв у складах. Це необхідно для формування навичок безвідривного письма слів в українській мові.",
                            "Usage": "Для використання:",
                            "Point1":  "Клацнути мишкою на букву. З’явиться випадаюче вікно із складами.",
                            "Point2": "Клацнути мишкою на склад. Внизу на екрані з’явиться графічне зображення процесу написання складу."                    
                        },
                        "WordTitle": "Закладка СЛОВА",
                        "WordBody": {
                            "Paragraph1": "Тренажер демонструє правильне з’єднання букв у словах. Це сприяє формуванню навичок ритмічного письма, щоб писати букви на однаковій відстані одна від одної, були однаковими по висоті і ширині, з однаковим нахилом. Приклади слів подані з перекладом українською, англійською і китайською мовами.",
                            "Usage": "Для використання:",
                            "Point1":   "Клацнути мишкою на слово. Внизу на екрані з’явиться графічне зображення процесу написання слова."                        
                        },
                        "NotesTitle": "Примітки",
                        "NotesBody": {
                            "Point1": "Є можливість зупинити і продовжити демонстрацію кнопкою СТАРТ/СТО та озвучити текст використовуючи кнопку ВИМОВА.",
                            "Point2": "Кнопка ВИМОВА відкриє сторінку Google Перекладача. Поля для перекладу будуть автоматично заповнені вказаними літерою, складом або словом. Google перекладач добре і правильно озвучує текст.",
                            "Point3": "Якщо ви використовуєте мобільний пристрій, не використовуйте додаток Google перекладача, використовуйте веб версію. Інакше текст необхідно буде вводити вручну.",
                        }
                    }
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
                    "Manual": {
                        "LetterTitle": "Закладка БУКВИ",
                        "LetterBody": {
                            "Paragraph1": "Тренажер демонстрирует рукописное написание всех букв украинского алфавита, больших и маленьких.",
                            "Usage": "Для использования:",
                            "Point1": "Нажать мышью на букву. Снизу, на экране, появиться анимационное отображение процесса написания каждого штриха буквы.", 
                        },
                        "SyllableTitle": "Закладка СЛОГИ",
                        "SyllableBody": {
                            "Paragraph1": "Тренажер демонстрирует правильное объединение букв в слогах. Это необходимо для формирования навыков безотрывного написания слов в украинском языке.",
                            "Usage": "Для использования:",
                            "Point1":  "Тренажер демонстрирует правильное объединение букв в слогах. Это необходимо для формирования навыков безотрывного написания слов в украинском языке.",
                            "Point2": "Нажать мышью на слог. Снизу, на экране, появиться анимационное отображение процесса написания слога."                    
                        },
                        "WordTitle": "Закладка СЛОВА",
                        "WordBody": {
                            "Paragraph1": "Тренажер демонстрирует правильно объединение букв в словах. Это помогает формировать навыки ритмичного письма. писать буквы находились на одинаковом расстоянии друг от друга, были одинаковые по высоте и ширине, а также с одинаковым наклоном. Примеры слов поданы на украинском, английском и китайском языках.",
                            "Usage": "Для использования:",
                            "Point1":   "Нажать мышью на слово. Снизу, на экране, появиться анимационное отображение процесса написания слова."                        
                        },
                        "NotesTitle": "Заметки",
                        "NotesBody": {
                            "Point1": "Есть возможность останавливать и продолжать анимационную демонстрацию с помощью кнопки СТАРТ/СТОП. Для прослушивания текста, на украинском языке, есть кнопка ПРОИЗНОШЕНИЕ.",
                            "Point2": "Кнопка ПРОИЗНОШЕНИЕ открывает страницу Google Переводчика. Поля для перевода будут автоматически заполнены выбранными буквой, слогом или словом. Google Переводчик хорошо и правильно озвучивает текст.",
                            "Point3": "Если вы используете мобильное устройство, не используйте приложение Google Переводчика, используйте веб версию. В противном случае, текст придется вводить вручную.",
                        }
                    },
                }
            },
            en: {
                translation: {
                    "tabBar": {
                        "Instraction": "Manual",
                        "Letter": "Letters",
                        "Syllable": "Syllables",
                        "Words": "Words",
                        "Language": "Language",
                    },
                    "videoBlock": {
                        "Play/pause": "Play/pause",
                        "Pronounce": "Pronounce"
                    },
                    "Manual": {
                        "LetterTitle": "LETTERS Tab",
                        "LetterBody": {
                            "Paragraph1": "This page demonstrates you handwriting process for all letters of Ukrainian alphabet including small and big letters.",
                            "Usage": "So, to use it you should:",
                            "Point1": "Click on the desired letter. The animated demonstration on the screen below will show you how to write selected letter correctly.", 
                        },
                        "SyllableTitle": "SYLLABLES Tab",
                        "SyllableBody": {
                            "Paragraph1": "This page demonstrates the correct connection of letters in syllables. This is necessary for the formation of skills of continuous writing of words in the Ukrainian language.",
                            "Usage": "So, to use it you should:",
                            "Point1":  "Click on letter. The drop-down menu with syllable list will be appeared.",
                            "Point2": "Choose desired syllable and click it. The video player below will show you how to write selected syllable."                    
                        },
                        "WordTitle": "WORDS Tab",
                        "WordBody": {
                            "Paragraph1": "This page demonstrates the correct connection of letters in words. It helps forming skills of rhythmic writing so that you will write your letters with the same slope, width and height and the same distance between them as well. The list of words is represented in three languages: Russian, English, and Chinese.",
                            "Usage": "So, to use it you should:",
                            "Point1":   "Click on desired word. The demonstration on the screen below will show you how to write selected word."                        
                        },
                        "NotesTitle": "Notes",
                        "NotesBody": {
                            "Point1": "It is possible to stop or resume video with PLAY/PAUSE button and voice the text using PRONOUNCE button.",
                            "Point2": "PRONOUNCE button will open Google Translate page. Translating field will be filled with the specified letter, syllable, or word automatically. Google Translate service voices text correct and well.",
                            "Point3": "If you use mobile device, do not use installed Google Translate app use web version instead. Otherwise you will have to type the text manually.",
                        }
                    },
                }
            }
        },
        
        fallbackLng: "en",
        // lng: "ua",

        interpolation: {
            escapeValue: false, // not needed for react!!
        },
})

export default i18n;