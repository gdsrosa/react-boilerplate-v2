import React from 'react';
import { connect } from 'react-redux';

import { getMessage, showMessage, getIfWasClicked } from 'ducks/App';
import Logo from 'components/Logo';

function Application({ message, handleShowMessage, wasClicked }) {
  return (
    <Container>
      <h1>React + Redux Boilerplate</h1>
      <Logo />
      <Button onClick={handleShowMessage}>
        Click here to see a message from Redux!
      </Button>
      {wasClicked ? <p>{message}</p> : ''}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  message: getMessage(state),
  wasClicked: getIfWasClicked(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleShowMessage: () => dispatch(showMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
