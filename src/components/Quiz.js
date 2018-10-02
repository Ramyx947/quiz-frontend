import React from 'react'

import QuestionCard from './QuestionCard'
import SubmitForm from './SubmitForm'
import UserCard from './UserCard'

export default class Quiz extends React.Component {
  state = {
    currentQuestion: 1,
    score: 0,
    selectedOption: undefined
  }

  submitScore = () => {
    // submit this.state.score to users data
    return <UserCard />
  }

  selectOption = (choice, index) => {
    choice.chosen = true
    this.setState({
      selectedOption: choice,
      selectedIndex: index,
      teasing: true
    })
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
  }

  resetQuestions = () => {
    this.setState({ currentQuestion: 1 })
    this.setState({ score: 0 })
  }

  render () {
    // console.log('Quiz:', this.props)
    const { title, questions } = this.props.quiz
    const { score, currentQuestion } = this.state

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
              questions={questions}
              selectNextQuestion={this.selectNextQuestion}
              score={score}
              selectOption={this.selectOption}
              currentQuestion={currentQuestion}
            />
        }
        <p>Current score:{this.state.score}</p>
      </div>

    )
  }
}
