import React from 'react'

import QuestionCard from './QuestionCard'
import SubmitForm from './SubmitForm'
import UserCard from './UserCard'

export default class Quiz extends React.Component {
  state = {
    currentQuestion: 1,
    score: 0,
    selectedOption: undefined,
    questionState: {
      teasing: false,
      answered: false
    }
  }

  initialQuestionState = () => {
    return {
      teasing: false,
      answered: false
    }
  }

  resetQuestionState = () => {
    this.setState({
      questionState: this.initialQuestionState()
    })
  }


  selectOption = (choice, i) => {
    choice.chosen = true
    this.setState({
      selectedOption: choice,
      selectedIndex: i,
      teasing: true
    })
    this.setState({
      questionState: Object.assign(this.state.questionState, {
        teasing: true
      })
    })
    setTimeout(() => {
      this.setState({
        questionState: {
          teasing: false,
          answered: true
        }
      })
      this.setState({ score: this.state.score + (choice.correct ? 1 : 0) })
    }, 1000)
  }


  selectNextQuestion = () => {
    const {currentQuestion, score} = this.state

    if (this.state.selectedOption === true) {
      this.setState({ score: score + 1 })
      this.setState({ currentQuestion: currentQuestion + 1 })
    } else {
      this.setState({ currentQuestion: currentQuestion + 1 })
    }

    this.setState({ selectedOption: undefined })
    this.resetQuestionState()
  }

  resetQuestions = () => {
    this.setState({ currentQuestion: 1 })
    this.setState({ score: 0 })
  }

  render () {
    const { title, questions } = this.props.quiz
    const { selectedQuiz, currentUser } = this.props
    const { score, currentQuestion, teasing } = this.state

    return (
      <div>
        <div className='pagination'>
          <a>&laquo;</a>
          {questions.map((quiz, i) =>
            <a>{i+1}</a>
          )}
          <a href='#'>&raquo;</a>
        </div><br></br>
        {
          currentQuestion > 10 && this.props.currentUser
            ? <SubmitForm
              score={score}
              submitScore={this.submitScore}
              resetQuestions={this.resetQuestions}
              postQuiz={() => this.props.postQuiz(currentUser.email, selectedQuiz, score)}
              showUserData={this.props.showUserData}
            />
            : <QuestionCard
              teasing={this.state.questionState.teasing}
              answered={this.state.questionState.answered}
              questions={questions}
              selectNextQuestion={this.selectNextQuestion}
              score={score}
              selectOption={this.selectOption}
              currentQuestion={currentQuestion}
            />
        }

      </div>

    )
  }
}
