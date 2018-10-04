import React from 'react'
import ReactModalLogin from 'react-modal-login'
import { Header, Icon, Modal, Image } from 'semantic-ui-react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const style = {
  background: 'white',
  borderRadius: '5px',
  padding: '10px'
}

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
    <div style={style}>
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


//<button
//   onClick={() => this.openModal()}>
//   Log in
// </button>
//
// <ReactModalLogin
//   visible={showModal}
//   onCloseModal={this.closeModal.bind(this)}
//   />
//
//   <TextField
//     id='emailInput'
//     label='Email'
//     value={email}
//     onChange={handleChange}
//     margin='normal'
//     name='email'
//   />
//   <br />
//     <Button onClick={() => this.props.getUser(email)} variant='contained' color='primary'>
//       SUBMIT
//     </Button>


//
// <Modal
//      trigger={<Button onClick={this.handleOpen}>Login</Button>}
//      open={this.state.modalOpen}
//      onClose={this.handleClose}
//      basic
//      size='small'
//    >
//      <Header icon='browser' content='Please enter your email address' />
//      <Modal.Content>
//        <TextField
//            id='emailInput'
//            label='Email'
//            value={email}
//            onChange={handleChange}
//            margin='normal'
//            name='email'
//          />
//          <Button onClick={() => this.props.getUser(email)} variant='contained' color='primary'>
//                Signin
//          </Button>
//
//      </Modal.Content>
//      <Modal.Actions>
//        <Button color="blue" onClick={this.handleClose} inverted>
//          <Icon name='checkmark' /> close
//        </Button>
//      </Modal.Actions>
//    </Modal>
