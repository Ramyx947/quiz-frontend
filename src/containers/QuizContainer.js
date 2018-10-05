import React from 'react'
import QuizCard from '../components/QuizCard'
import Search from '../components/Search'

class QuizContainer extends React.Component {
  render () {
    return (
    <div>
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
    </div>
    )
  }
}

export default QuizContainer


//      <Search updateSearch={this.props.updateSearch}/>
