import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

const Button = ({ className, label, loading, onClick }) => {
  return (
    <StyledButton className={className} disabled={loading} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
  loading: false,
};

export default Button;
