import React from 'react'
import ReactModalLogin from 'react-modal-login'
import { Header, Icon, Modal, Image } from 'semantic-ui-react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


export default class SignInForm extends React.Component {

  state = {
    email: undefined,
    modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

render() {

  const { email, password, showModal } = this.state
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
          color='primary'
        />
        <br />
        <Button onClick={() => this.props.getUser(email)} variant='contained' color='primary'>
          LOGIN
        </Button>
      </div>

  )
}

}
