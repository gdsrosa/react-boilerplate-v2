import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Logo from 'components/Logo';

import { getMessage, showMessage, getIfWasClicked } from 'ducks/App';

const App = ({ message, handleShowMessage, wasClicked }) => (
  <Container>
    <h1>React + Redux Boilerplate</h1>
    <Logo />
    <Button onClick={handleShowMessage}>
      Click here to see a message from Redux!
    </Button>
    {wasClicked ? <p>{message}</p> : ''}
  </Container>
);

const Button = styled.button`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  background: #333;
  color: #fff;
  padding: 5px;
  border: 1px solid #333;
  border-radius: 10px;
`;

const Container = styled.div`
  font-family: Helvetica, Verdana, sans-serif;
`;

const mapStateToProps = state => ({
  message: getMessage(state),
  wasClicked: getIfWasClicked(state),
});

const mapDispatchToProps = dispatch => ({
  handleShowMessage: () => dispatch(showMessage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
