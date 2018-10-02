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

  initialQuestionState () {
    return {
      teasing: false,
      answered: false
    }
  }

  resetQuestionState() {
    this.setState({ 
      questionState: this.initialQuestionState()
    })
  }

  submitScore = () => {
    // submit this.state.score to users data
    return <UserCard />
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
    }, 2000)
  }

  // selectNextQuestion = (currentQuestion)=>{
  //   selectedOption.correct ? 
  //     (this.setState({score: this.state.score +1}) && this.setState({currentQuestion: this.state.currentQuestion + 1}) :
  //     (this.setState({ score: this.state.score + 0 } && this.setState({ currentQuestion: this.state.currentQuestion + 1 })

  //     this.resetOption()
  // }

  // resetOption=()=>{
  //   this.setState({ selectedOption: undefined })
  // }

  selectNextQuestion = () => {
    if (this.state.selectedOption === true) {
      this.setState({ score: this.state.score + 1 })
      this.setState({ currentQuestion: this.state.currentQuestion + 1 })
    } else {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 })
    }

    this.setState({ selectedOption: undefined })
    this.resetQuestionState()
  }

  resetQuestions = () => {
    this.setState({ currentQuestion: 1 })
    this.setState({ score: 0 })
  }

  render () {
    // console.log('Quiz:', this.props)
    const { title, questions } = this.props.quiz
    const { score, currentQuestion, teasing } = this.state

    return (

      <div>
        <div className='pagination'>
          <a>&laquo;</a>
          <a>1</a>
          <a>2</a>
          <a>3</a>
          <a>4</a>
          <a>5</a>
          <a>6</a>
          <a>7</a>
          <a>8</a>
          <a>9</a>
          <a>10</a>
          <a href='#'>&raquo;</a>
        </div><br />
        <h1>{title}</h1>
        {
          currentQuestion > 10
            ? <SubmitForm
              score={score}
              submitScore={this.submitScore}
              resetQuestions={this.resetQuestions}
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
        <p>Current score:{score}</p>
      </div>

    )
  }
}
