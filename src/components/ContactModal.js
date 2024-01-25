import React, {useState} from 'react'
import { Form, Input, Button, Modal } from 'semantic-ui-react'
import ContactForm from './ContactForm';

function ContactModal({isOpen, setIsOpen}) {

  return (
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
      closeIcon
      trigger={<Button size='massive'  basic color='black' content='Black' onClick={() => setIsOpen(!isOpen)}>30 Minute Consultation</Button>}
    >
      <Modal.Header>
        <h1>Consultation</h1>
      </Modal.Header>
      <Modal.Content>
        <ContactForm fromModal={true} setIsOpen={setIsOpen}/>
      </Modal.Content>
    </Modal>
  )
}

export default ContactModal;
