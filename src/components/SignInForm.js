import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


export default class SignInForm extends React.Component {

render() {

  const { username, password } = this.state
  const { handleChange, handleSubmit } = this

  return(

    <div>
        <TextField
          id='usernameInput'
          label='Username'
          value={username}
          onChange={handleChange}
          margin='normal'
          name='username'
        />
        <br />
        <TextField
          id='passwordInput'
          label='Password'
          value={password}
          onChange={handleChange}
          margin='normal'
          name='password'
          type='password'
        />
    </div>
  )
}

}
