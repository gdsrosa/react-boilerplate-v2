import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  margin: 10px;
  background: ${(props) => (props.color ? props.color : '#764abc')};
  color: ${(props) => (props.color ? props.color : '#fff')};
  padding: 12px;
  border: 2px solid ${(props) => (props.color ? props.color : '#764abc')};
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  outline: none;

  :hover {
    background-color: ${darken(0.2, '#764abc')};
  }
`;

export { Button as default };
