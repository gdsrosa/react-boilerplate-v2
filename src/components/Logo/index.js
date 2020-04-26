import React from 'react';

import { Container, ImgRotate } from './styles';

import reactLogo from 'static/react-logo.png';
import reduxLogo from 'static/redux-logo.png';

function Logo() {
  return (
    <Container>
      <ImgRotate src={reactLogo} />
      <ImgRotate src={reduxLogo} />
    </Container>
  );
}

export default Logo;
