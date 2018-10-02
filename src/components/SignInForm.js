import React from 'react'
import ReactModalLogin from 'react-modal-login'


import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


export default class SignInForm extends React.Component {

  state = {
    email: undefined,
    showModal: false
  }

  openModal() {
    this.setState({
      showModal: true,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

render() {

  const { email, password, showModal } = this.state
  const { handleChange } = this

  return(
    <div>

      <button
        onClick={() => this.openModal()}>
        Log in
      </button>

      <ReactModalLogin
        visible={showModal}
        onCloseModal={this.closeModal.bind(this)}
        />

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
