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

    <div class="dropdown">
         <button class="dropbtn">Menu</button>
           <div class="dropdown-content">
             <a href="#">Home</a>
             <a href="#">My Account</a>
           </div>
    </div>
    </Fragment>
  )
}

export default NavBar


// sort out modal/login styling
// User page (+ charts?)
// stop breaking if email incorrect for login && give error message instead
//menu navigation
//can only submit once - disable button once clicked
//React router
//change pointer to show button disabled
//signup form
