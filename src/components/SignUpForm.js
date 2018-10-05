import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'



export default class SignUpForm extends React.Component {

  state = {
    name: undefined,
    email: undefined
  }


  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const { name, email } = this.state

    return(
      <div>
      <TextField
          id='nameInput'
          label='Name'
          value={name}
          onChange={this.handleChange}
          margin='normal'
          name='name'
          color='primary'
        />
        <br />
      <TextField
          id='emailInput'
          label='Email'
          value={email}
          onChange={this.handleChange}
          margin='normal'
          name='email'
          color='primary'
        />
        <br />
          <Button onClick={() => this.props.createUser(name, email)}
            variant='contained'
            color='primary'>
            SIGN UP
          </Button>
        </div>
    )
  }

}
