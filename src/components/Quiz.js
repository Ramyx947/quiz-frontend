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

  selectOption = (selectedOption) => {
    this.setState({ selectedOption })
  }

  submitScore = () => {
    //submit this.state.score to users data
    return < UserCard />
  }

  selectNextQuestion = () => {
      if (this.state.selectedOption === true) {
        this.setState({score: this.state.score + 1})
        this.setState({currentQuestion: this.state.currentQuestion + 1})
      }
      else {
        this.setState({currentQuestion: this.state.currentQuestion + 1})
      }

      this.setState({selectedOption: undefined})
    }

  resetQuestions = () => {
    this.setState({currentQuestion: 1})
    this.setState({score: 0})
  }

  render() {
    const { title, subject, questions } = this.props.quiz
    const { score, currentQuestion} = this.state

    return(


      <div>
        <div className="pagination">
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
          <a href="#">&raquo;</a>
        </div><br></br>
        <h1>{title}</h1>
      {
        currentQuestion > 9 ?
        < SubmitForm score={score} submitScore={this.submitScore} resetQuestions={this.resetQuestions}/> :
        < QuestionCard questions={questions}
          currentQuestion={currentQuestion}
          selectNextQuestion={this.selectNextQuestion}
          score={score}
          selectOption={this.selectOption}/>
      }
      <p>Current score:{score}</p>
      </div>
    )
  }

}
