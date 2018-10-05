import React from 'react'

class Choice extends React.Component {

  render () {
    return (
      <button
        disabled={this.props.teasing || this.props.answered}
        className={`optionButton ${this.props.className}`}
        onClick={this.props.onClick}
      >
        {this.props.choice.option}
      </button>
    )
  }
}
export default Choice
