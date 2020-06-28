import React, { useState, useContext } from 'react';

import Button from '../../components/_helpers/Button';

import Container from './styles';
import Logo from './Logo';

export default function Application() {
  const [message, setMessage] = useState('');
  return (
    <Container>
      <h1>
        React + Hooks + Context API <br /> Boilerplate
      </h1>
      <Logo />
      <Button
        type="button"
        onClick={() => {
          setMessage('Hi! Hooks here, any thoughts on me? Go check the ');
        }}
      >
        Click me to see somenthing
      </Button>
      {message && (
        <div>
          {message}
          <a
            href="https://reactjs.org/docs/hooks-intro.html"
            target="_blank"
            rel="noreferrer"
          >
            Hooks Documentation!
          </a>
        </div>
      )}
    </Container>
  );
}
