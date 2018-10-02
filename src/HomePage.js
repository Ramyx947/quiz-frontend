import React from 'react'

import NavBar from './components/NavBar'
import QuizContainer from './containers/QuizContainer'
import Quiz from './components/Quiz'
import SignInForm from './components/SignInForm'


class HomePage extends React.Component {
  state = {
    quizzes: [],
    users: [],
    selectedQuiz: undefined,
    currentUser: undefined
  }

  selectQuiz = (selectedQuiz) =>
    this.setState({selectedQuiz})

  deselectQuiz = () =>
    this.setState({ selectedQuiz: undefined })

  getQuizzes =() => {
    return fetch('http://localhost:3006/quizzes')
      .then(resp => resp.json())
      .then(quizzes => this.setState({ quizzes }))
  }

  componentDidMount() {
    this.getQuizzes()
    //const currentUser = localStorage.getItem('currentUser')
    //if currentUser {
    //this.signin(currentUser)}
  }

  render () {
    const { quizzes, selectedQuiz, currentUser } = this.state
    return (
      <div className='grid-container'>
        <NavBar />
        {
          selectedQuiz
            ? <Quiz quiz={selectedQuiz} deselectQuiz={this.deselectQuiz} />
            : <QuizContainer quizzes={quizzes} selectQuiz={this.selectQuiz} />
        }

      </div>
    )
  }
}
export default HomePage
