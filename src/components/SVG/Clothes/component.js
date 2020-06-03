import React from 'react';
import PropTypes from 'prop-types';

import Tee from './Tee';

const Clothes = ({ clothes, color }) => {
  switch (clothes) {
    case 'TEE':
      return <Tee color={color} />;
    default:
      return null;
  }
};

Clothes.propTypes = {
  clothes: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Clothes;
