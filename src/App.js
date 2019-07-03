import React from 'react';
import { connect } from 'react-redux';

import { getMessage, showMessage, getIfWasClicked } from 'ducks/App';

const App = ({ message, handleShowMessage, wasClicked }) => (
  <div>
    <h1>React + Redux Boilerplate</h1>
    <button onClick={handleShowMessage}>
      Click me to see a message from Redux!
    </button>
    {wasClicked ? <p>{message}</p> : ''}
  </div>
);

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
