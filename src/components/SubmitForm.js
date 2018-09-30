import React from 'react'

const SubmitForm = props => {

return(

  <div>
    <h3>Well done, you have completed the quiz! Your score is {props.score}</h3>
    <button className="nextButton" onClick={props.submitScore}>Submit score</button>
    <button className="nextButton" onClick={props.resetQuestions}>Try again</button>
    <h5>See all your results</h5>

  </div>


)}


export default SubmitForm
