import React from 'react'

import NavBar from './components/NavBar'
import QuizContainer from './containers/QuizContainer'
import QuizDetails from './components/QuizDetails'
// import QuestionContainer from './containers/QuestionContainer'
// import UserContainer from './containers/UserContainer'

class HomePage extends React.Component {
  state = {
    quizzes: [],
    users: [],
    selectedQuiz: undefined
  }

  selectQuiz = (quiz) =>
    this.setState({ selectedQuiz: quiz })

  deselectQuiz = () =>
   this.setState({ selectedQuiz: undefined })

  getQuizzes =() => {
    return fetch('http://localhost:9005/quizzes')
      .then(resp => resp.json())
      .then(quizzes => this.setState({ quizzes }))
  }

  componentDidMount () {
    this.getQuizzes()
  }

  componentDidUpdate
  
  
  render () {
    const { quizzes, selectedQuiz } = this.state
    return (
      <div className='grid-container'>
        <NavBar />
        {
          selectedQuiz
            ? <QuizDetails quiz={selectedQuiz} deselectQuiz={this.deselectQuiz} />
            : <QuizContainer quizzes={quizzes} selectQuiz={this.selectQuiz} />
        }

      </div>
    )
  }
}
export default HomePage
