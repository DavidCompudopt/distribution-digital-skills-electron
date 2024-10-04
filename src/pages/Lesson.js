import { Link, useParams } from 'react-router-dom'
import CompleteAndContinueButton from "../components/CompleteAndContinueButtons";
import {useContext} from "react";
import {LanguageContext} from "../store/languageContext";

function Lesson() {
  const { language, setLanguage, languageData } = useContext(LanguageContext)
  const { courseId, lessonId } = useParams()
  const course = languageData.find(course => course.id === parseInt(courseId))
  const lesson = course.lessons.find(lesson => lesson.id === parseInt(lessonId))
  const videoString = `/videos/${lesson.videoId}`
  console.log(videoString)

  const handleToggleLanguage = () => {
    const newLanguage = language === 'courses' ? 'courses-es' : 'courses';
    setLanguage(newLanguage);
  }

  const nextLessonId = () => {
    const currentIndex = course.lessons.indexOf(lesson)
    const nextIndex = (currentIndex + 1) % course.lessons.length
    return course.lessons[nextIndex].id
  }

  return (
      <>
        <button className="button primary icon"
                onClick={handleToggleLanguage}>{language === 'courses' ? 'Cambiar a Espanol' : 'Switch to English'}</button>

        <div className="Lesson page">
          <header>
            <p>
              <Link to={'/courses/' + course.id}>Back to {course.title}</Link>
            </p>
            <h1>{lesson.title}</h1>
          </header>
          <div className="Content">
            <video width="100%" controls src={videoString}/>
            <CompleteAndContinueButton courseId={courseId} lessonId={nextLessonId()}/>
          </div>
        </div>
      </>
  )
}

export default Lesson
