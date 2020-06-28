import React from 'react';
import PropTypes from 'prop-types';

import Button from './styles';

export default function StyledButton({ children, ...props }) {
  return (
    <div>
      <Button {...props}>{children}</Button>
    </div>
  );
}

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
};
