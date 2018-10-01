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
