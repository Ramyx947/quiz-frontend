import React from 'react'
import QuizCard from '../components/QuizCard'

const QuizContainer = ({ quizzes, selectQuiz }) =>
  <div className='quizzes-list'>
      Quizzes options:
    {
      quizzes.map(quiz =>
        <QuizCard
          quiz={quiz}
          selectQuiz={selectQuiz}
        />)
    }
  </div>

export default QuizContainer
