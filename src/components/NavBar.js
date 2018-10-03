import React from 'react'

const NavBar = (props) => {
  return (
    <div className='nacWrapper'>
      <span className='headerText'>Welcome {props.currentUser.name && `, ${props.currentUser.name}`}
      </span>
      <button onClick={props.signOut}>Logout</button>
    </div>
  )
}

export default NavBar


// save userQuiz state 
// submit quiz and post to user's Quizzes
// sort out modal/login styling
// User page (+ charts?)
// stop breaking if email incorrect for login && give error message instead
