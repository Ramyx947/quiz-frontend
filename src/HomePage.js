import React from 'react'

import QuizContainer from './containers/QuizContainer'
import QuestionContainer from './containers/QuestionContainer'
import UserContainer from './containers/UserContainer'
import Quiz from './components/Quiz'

class HomePage extends React.Component {
  state = {
    quizzes: [],
    users: [],
    selectedQuiz: undefined
  }

  selectQuiz = (selectedQuiz) => 
    this.setState({selectedQuiz})


  getQuizzes =() => {
    return fetch('http://localhost:9005/quizzes')
      .then(resp => resp.json())
      .then(quizzes => this.setState({ quizzes }))
  }

  componentDidMount () {
    this.getQuizzes()
  }

  render () {
    const { quizzes, selectedQuiz } = this.state
    return (
      <div className='grid-container'>
        {
          selectedQuiz ?
            <Quiz quiz={selectedQuiz} /> :
            <QuizContainer quizzes={quizzes} selectQuiz={this.selectQuiz} />
        }

      </div>
    )
  }
}
export default HomePage
