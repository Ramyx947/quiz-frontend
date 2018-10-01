import React from 'react'
import QuizCard from '../components/QuizCard'

class QuizContainer extends React.Component {
  render () {
    return (
      <div className='quizzes'>
        {
          this.props.quizzes.map(quiz =>
            <QuizCard 
              quiz={quiz}
              selectQuiz={this.props.selectQuiz}
              id={quiz.id} 
            />)
        }
      </div>
    )
  }
}

export default QuizContainer
