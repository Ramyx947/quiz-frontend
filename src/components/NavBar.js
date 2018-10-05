import React from 'react'
import { Fragment} from 'react'


const NavBar = (props) => {
  return (
    <Fragment>
    <div className='nacWrapper'>
      <span className='headerText'>Welcome{props.currentUser.name && `, ${props.currentUser.name}`}
      </span>
      <button onClick={props.signOut}>Logout</button>
    </div>
    </Fragment>
  )
}

export default NavBar


//search bar styling
//search function styling
// User page (+ charts?)
// stop breaking if email incorrect for login && give error message instead/ redirect to sign up
//menu navigation
//can only submit once - disable button once clicked
//React router
//change pointer to show button disabled
