import React from 'react'

const NavBar = (props) => {
  return (
    <div className='nacWrapper'>
      <span className='headerText'>Welcome {props.username && `, ${props.username}`}
      </span>
    </div>
  )
}

export default NavBar
