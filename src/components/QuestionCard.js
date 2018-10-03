import React from 'react'

import Choice from './Choice'

class QuestionCard extends React.Component {

  buttonClass = (choice, i) => {
    return this.props.answered ? (choice.correct ? 'correct' : 'incorrect')
      : (this.props.teasing ? 'pulsing' : '')
  }

  render () {
    const foundQuestion = this.props.questions.find(question => {
      //  console.log('Question:', props.currentQuestion)
      return question.number == this.props.currentQuestion
    })
    const { answered, teasing } = this.props
    const { questions, selectNextQuestion, score, currentQuestion } = this.props

    return (
      <div>
        <h4>{foundQuestion.number}.{foundQuestion.text}</h4>
        {foundQuestion.choices.map((choice, i) =>
          <div>
            <Choice
              testing={teasing}
              answered={answered}
              score={score}
              key={choice.option}
              choice={choice}
              disabled={teasing || answered}
              className={`optionButton ${this.buttonClass(choice, i)}`}
              onClick={() => this.props.selectOption(choice, i)}>{choice.option}
            </Choice>
          </div>
        )}
        <button
          className='nextButton'
          onClick={this.props.selectNextQuestion}>
        NEXT QUESTION!!!
        </button>
      </div>
    )
  }
}

export default QuestionCard
