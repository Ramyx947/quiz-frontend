import React from 'react'
import ReactModalLogin from 'react-modal-login'
import { Container } from 'semantic-ui-react'

import NavBar from './components/NavBar'
import QuizContainer from './containers/QuizContainer'
import Quiz from './components/Quiz'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import UserCard from './components/UserCard'
import Search from './components/Search'
import SignInModal from './components/SignInModal'


class HomePage extends React.Component {
  state = {
    quizzes: [],
    users: [],
    selectedQuiz: undefined,
    currentUser: undefined,
    showUserData: false,
    searchQuery: ""
  }

  createUser = (name, email) => {
      return fetch('http://localhost:3005/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ user: {name, email}})
  	  }).then(resp => resp.json())
    }

  updateSearch = (searchQuery) => this.setState({ searchQuery })

  filterQuizzes = () =>
     this.state.quizzes.filter(quiz => {
      const subject = quiz.subject.toLowerCase()
      const title = quiz.title.toLowerCase()
      const searchQuery = this.state.searchQuery.toLowerCase()

      return subject.includes(searchQuery) || title.includes(searchQuery)
    })

  postQuiz = (email, quiz, score) => {
	  return fetch(`http://localhost:3005/users/${email}`, {
    	method: 'POST',
    	headers: {'Content-Type': 'application/json'},
    	body: JSON.stringify({quiz: { ...quiz, score}})
	  }).then(resp => resp.json())
  }

  getUser = (email) => {
    fetch(`http://localhost:3005/users/${email}`)
    .then(resp => resp.json())
    .then(data => this.setState({currentUser: data},
      () => localStorage.setItem('currentUser', data.email)
    ))
  }

  signIn = (currentUser) =>
    this.setState({currentUser})


  signOut = () => {
    this.setState({currentUser: undefined})
    localStorage.removeItem('currentUser')
  }

  selectQuiz = (selectedQuiz) =>
    this.setState({ selectedQuiz: JSON.parse(JSON.stringify(selectedQuiz)) })

  deselectQuiz = () =>
    this.setState({ selectedQuiz: undefined })

  getQuizzes =() => {
    return fetch('http://localhost:3005/quizzes')
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
    const { quizzes, selectedQuiz, currentUser, showUserData, showModal } = this.state
    const {
      chooseOption,
      increaseScore,
      selectQuiz,
      postQuiz,
      deselectQuiz,
      updateSearch,
      getUser,
      signIn,
      signOut,
      openModal
    } = this
    return (
      <Container>
        <div className="top-banner">

        { currentUser ?
          <NavBar currentUser={currentUser} signOut={this.signOut}/> :
          <SignInModal
            getUser={getUser}
            signIn={signIn}
            signOut={signOut}
            openModal={openModal}
          />

        }
        </div>
        <Search updateSearch={updateSearch}/>
        {
          selectedQuiz
            ? <Quiz quiz={selectedQuiz}
                    deselectQuiz={deselectQuiz}
                    postQuiz={postQuiz}
                    currentUser={currentUser}
                    increaseScore={increaseScore}
                    chooseOption={chooseOption}
                    selectedQuiz={selectedQuiz}
                    showUserData={showUserData} />
                  : <QuizContainer quizzes={this.filterQuizzes()} selectQuiz={selectQuiz} />
        }
        { (showUserData === true) ? <UserCard/> : null }
        <SignUpForm/>
      </Container>
    )
  }
}
export default HomePage
