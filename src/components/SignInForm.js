import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


export default class SignInForm extends React.Component {

  state = {
    email: undefined
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }



render() {

  const { email, password } = this.state
  const { handleChange } = this

  return(
    <div>
        <TextField
          id='emailInput'
          label='Email'
          value={email}
          onChange={handleChange}
          margin='normal'
          name='email'
        />
        <br />
          <Button onClick={() => this.props.getUser(email)} variant='contained' color='primary'>
            SUBMIT
          </Button>
    </div>
  )
}

}
