import React, {createContext, useEffect, useState} from "react";
import {courses} from "../courses.js";
import {coursesES} from "../courses-es";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("courses");
    const [languageData, setLanguageData] = useState(courses);

    useEffect(() => {
        fetchLanguageData();
    }, []);

    useEffect(() => {
        fetchLanguageData();
    }, [language])

    const fetchLanguageData = () => {
        let data = {}
        if (language === 'courses'){
            setLanguageData(courses)
        }
        if (language === 'courses-es') {
            setLanguageData(coursesES)
        }
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, languageData }}>
            {children}
        </LanguageContext.Provider>
    )
}

export { LanguageContext, LanguageProvider};