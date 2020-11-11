/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import PropTypes from 'prop-types';
import React from 'react';

import Styled from './styles';

const OptionLabel = ({ label, isSelected, onClick }) => {
  return (
    <Styled isSelected={isSelected} onClick={onClick}>
      <p className="label">{label}</p>
    </Styled>
  );
};

OptionLabel.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OptionLabel;
