import CourseSummary from '../components/CourseSummary'
import {useContext} from "react";
import {LanguageContext} from "../store/languageContext";


function Home() {

    const { language, setLanguage, languageData } = useContext(LanguageContext)
    const handleToggleLanguage = () => {
        const newLanguage = language === 'courses' ? 'courses-es' : 'courses';
        setLanguage(newLanguage);
    }

  return (
    <div className="Home page">
      <header>
          <h1>Digital Skills at Home</h1>
          <button className="button primary icon" onClick={handleToggleLanguage}>{language === 'courses'? 'Cambiar a Espanol' : 'Switch to English'}</button>
      </header>
      {languageData.map((course) => (
        <CourseSummary course={course} key={course.id} />
      ))}
    </div>
  )
}

export default Home
