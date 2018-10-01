import React from 'react'

const QuizDetails = ({ quiz, deselectQuiz }) =>
  <div className='quiz-details'>
    <h1>{quiz.title}</h1>
    <p> Total questions:</p>
    <button onClick={deselectQuiz}>
      Go back to quizzes </button>
  </div>

export default QuizDetails
