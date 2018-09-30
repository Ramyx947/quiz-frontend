import React from 'react'

const QuestionCard = props => {

  const foundQuestion = props.questions.find(question => question.number == props.currentQuestion)

  return(
    <div>
        <h4>{foundQuestion.number}. {foundQuestion.text}</h4>
          {foundQuestion.choices.map(choice =>
              <div>
                  <button className="optionButton" onClick={() => props.selectOption(choice.correct)}>{choice.option}</button>
              </div>
          )}
      <button className="nextButton" onClick={props.selectNextQuestion}>NEXT QUESTION!!!</button>
    </div>
  )
}

export default QuestionCard
