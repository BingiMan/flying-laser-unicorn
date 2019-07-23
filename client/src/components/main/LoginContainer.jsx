import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import LoginUser from './LoginUser';

export default function LoginContainer (props) {

  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Container style={{ paddingTop: '2rem' }} className="container">
      {showButton && (
        <Button
          onClick={() => setShowMessage(true)}
          size="lg"
        >
          Login (pop up ish)
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
            <h1>Login Form here</h1>
          </Alert.Heading>
          <LoginUser
            formData={props.formData}
            handleChange={props.handleChange}
            handleSubmit={props.handleSubmit} />
          <Button onClick={() => setShowMessage(false)}>
            Submit and close
          </Button>
        </Alert>
      </CSSTransition>
    </Container>
  );
}