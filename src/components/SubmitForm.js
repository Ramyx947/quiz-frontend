import React from 'react'
import UserCard from './UserCard'

const SubmitForm = props => {

return(
  <div>
    <h3>Well done, you have completed the quiz! Your score is {props.score}</h3>
    <br></br>
    <button className="nextButton" onClick={props.postQuiz}>Submit score</button>
    <button className="nextButton" onClick={props.resetQuestions}>Try again</button>
    <br></br>
    <br></br>
    <button onClick={() => props.showUserData}>See all your results</button>
  </div>

)}


export default SubmitForm
