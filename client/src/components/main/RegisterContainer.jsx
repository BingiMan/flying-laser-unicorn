import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import RegisterUser from './RegisterUser';

export default function RegisterLoginContainer (props) {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
    <Container style={{ paddingTop: '2rem' }}>
      {showButton && (
        <Button
          onClick={() => setShowMessage(true)}
          size="lg"
        >
          Register (PopUpish)
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
          className="container-popup"
        >
          <Alert.Heading>
              <h1>Register From Here</h1>
          </Alert.Heading>
          
          <RegisterUser
              formData={props.formData}
              handleChange={props.handleChange}
              handleSubmit={props.handleSubmit}
              />
          
          <Button onClick={() => setShowMessage(false)}>
            Submit and close
          </Button>
        </Alert>
      </CSSTransition>
      </Container>
      </>
  );
}