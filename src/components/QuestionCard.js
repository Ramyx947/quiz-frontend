import React from 'react'

import Choice from './Choice'

class QuestionCard extends React.Component {

  state = {}

  buttonClass = (choice, i) => {
    return choice.chosen ? (choice.correct ? 'correct' : 'incorrect')
      : (this.state.selectedIndex === i ? 'pulsing' : '')
  }

  render () {
    const foundQuestion = this.props.questions.find(question => {
      //  console.log('Question:', props.currentQuestion)
      return question.number == this.props.currentQuestion
    })
    return (
      <div>
        <h4>{foundQuestion.number}.{foundQuestion.text}</h4>
        {foundQuestion.choices.map((choice, i) =>
          <div>
            <Choice
              key={choice.option}
              choice={choice}
              disabled={this.state.teasing || choice.chosen}
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
