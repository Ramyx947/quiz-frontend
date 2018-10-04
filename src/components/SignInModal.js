import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

const SignInModal = (props) => {

  const { getUser, signIn, signOut, openModal } = props

  return <Modal trigger={<Button>Sign In/Sign Up</Button>} basic size='small'>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <SignInForm getUser={getUser}
                signIn={signIn}
                signOut={signOut}
                openModal={openModal}
      />

      <SignUpForm/>
    </Modal.Content>
  </Modal>
}

export default SignInModal
