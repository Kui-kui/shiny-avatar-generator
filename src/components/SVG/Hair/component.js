import React from 'react';
import PropTypes from 'prop-types';

import Hair0 from './Hair0';
import Hair1 from './Hair1';
import Hair2 from './Hair2';

const Hair = ({ color, haircut }) => {
  switch (haircut) {
    case 2:
      return <Hair2 color={color} />;
    case 1:
      return <Hair1 color={color} />;
    case 0:
    default:
      return <Hair0 color={color} />;
  }
};

Hair.propTypes = {
  color: PropTypes.string.isRequired,
  haircut: PropTypes.number.isRequired,
};

export default Hair;
