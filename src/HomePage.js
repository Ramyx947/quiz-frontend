import React from 'react'
import ReactModalLogin from 'react-modal-login'

import NavBar from './components/NavBar'
import QuizContainer from './containers/QuizContainer'
import Quiz from './components/Quiz'
import SignInForm from './components/SignInForm'



class HomePage extends React.Component {
  state = {
    quizzes: [],
    users: [],
    selectedQuiz: undefined,
    currentUser: undefined,
  }


  postQuiz = (email, quiz) => {
	  fetch(`http://localhost:3005/users/${email}`, {
    	method: 'POST',
    	headers: {'Content-Type': 'application/json'},
    	body: JSON.stringify({ quiz })
	  }).then(resp => resp.json())
  }

  getUser = (email) => {
    fetch(`http://localhost:3005/users/${email}`)
    .then(resp => resp.json())
    .then(data => this.setState({currentUser: data},
      localStorage.setItem('currentUser', data.email)
    ))
  }

  signIn = (currentUser) =>
    this.setState({currentUser})


  signOut = () => {
    this.setState({currentUser: undefined})
    localStorage.removeItem('currentUser')
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
    const currentUserEmail = localStorage.getItem('currentUser')
    if (currentUserEmail) {
        fetch(`http://localhost:3005/users/${currentUserEmail}`)
        .then(resp => resp.json())
        .then(data => this.setState({currentUser: data}))
    }
  }

  render () {
    const { quizzes, selectedQuiz, currentUser } = this.state
    return (
      <div className='grid-container'>

        { currentUser ?
          <NavBar currentUser={currentUser} signOut={this.signOut}/> :
          <SignInForm getUser={this.getUser}
                      signIn={this.signIn}
                      signOut={this.signOut}
                      openModal={this.openModal} />
        }
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
