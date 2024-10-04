import { useParams } from 'react-router-dom'
import LessonSummary from '../components/LessonSummary'
import { Link } from 'react-router-dom'
import {LanguageContext} from "../store/languageContext";
import {useContext} from "react";

function Course() {
  const { language, setLanguage, languageData } = useContext(LanguageContext)
  const { courseId } = useParams()
  const course = languageData.find(course => course.id === parseInt(courseId))
  const handleToggleLanguage = () => {
        const newLanguage = language === 'courses' ? 'courses-es' : 'courses';
        setLanguage(newLanguage);
    }
  return (
    <>
        <button className="button primary icon" onClick={handleToggleLanguage}>{ language === 'courses'? 'Cambiar a Espanol' : 'Switch to English'}</button>
        <div className="Course page">
          <header>
            <p>
              <Link to={'/'}>Back to courses</Link>
            </p>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <Link className="button primary icon" to={`/courses/${courseId}/lessons/${course.lessons[0].id}`}>
              Start course
            </Link>
          </header>
          <div>
            {course.lessons.map((lesson, index) => (
              <LessonSummary
                courseId={courseId}
                lesson={lesson}
                num={index + 1}
                key={lesson.id}
              />
            ))}
          </div>
        </div>
    </>
  )

}

export default Course
