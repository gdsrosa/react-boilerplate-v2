import React from 'react';
import styled, { keyframes } from 'styled-components';

import reactLogo from 'static/react-logo.png';
import reduxLogo from 'static/redux-logo.png';

const Logo = () => (
  <Container>
    <ImgRotate src={reactLogo} />
    <ImgRotate src={reduxLogo} />
  </Container>
);

const Container = styled.div`
  align-items: center;
  justify-content: space-between;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform:  rotate(360deg);
  }
`;

const ImgRotate = styled.img`
  display: center;
  animation: ${rotate} 20s linear infinite;
  height: 100px;
  width: 100px;
  margin: 2px;
`;

export default Logo;
