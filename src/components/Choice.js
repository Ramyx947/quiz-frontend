import React from 'react'

class Choice extends React.Component {

  state = {
    answered: false,
    className: ''
  }

  chooseOption = () => {
    this.setState({ answered: true })
    this.changeClassName()
  }

  changeClassName = () => {
    this.setState({ className: 'pulsing' })
    setTimeout(() => {
      this.setState({ className: this.props.choice.correct ? 'correct' : 'incorrect' })
    }, 2000)
  }

  render () {
    return (
      <button
        onClick={this.chooseOption}
        disabled={this.state.teasing || this.state.answered}
        className={`optionButton ${this.state.className}`}
      >
        {this.props.choice.option}
      </button>
    )
  }
}

export default Choice
