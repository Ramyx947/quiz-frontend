import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

const style = {
  background: 'white',
  borderRadius: '5px',
  padding: '10px'
}

const SignInModal = (props) => {

  const { getUser, signIn, signOut, openModal, createUser } = props

  return <Modal trigger={<Button>Sign In/Sign Up</Button>} basic size='small' closeIcon >
    <Header icon='signup' content='Please sign in or create an account below' />
    <Modal.Content>
    <div style={style}>
      <SignInForm getUser={getUser}
                signIn={signIn}
                signOut={signOut}
                openModal={openModal}
      />
      <SignUpForm createUser={createUser}/>
      </div>
    </Modal.Content>
  </Modal>
}

export default SignInModal
