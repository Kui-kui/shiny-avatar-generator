import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

const Hair = ({ color }) => {
  return (
    <Styled>
      <svg
        className="hair"
        fill="none"
        height="165"
        viewBox="0 0 173 165"
        width="173"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M143.407 148.777C153.664 131.607 159.456 107.11 152.97 75.7285C150.545 63.9299 147.338 53.965 143.354 45.8333C145.727 44.9785 147.809 44.9637 149.5 46C165 55.5 178 155 170 161.5C162.733 167.405 148.039 163.819 140.535 161.989C139.779 161.804 139.095 161.637 138.5 161.5C140.157 157.949 141.855 153.522 143.407 148.777Z"
          fill={color}
          fillRule="evenodd"
        />
        <path
          d="M52.0002 69.5C82.4002 81.5 139 73.5 158 65.5C133 -28.5 37.5002 -7.49998 15.0002 48.5C-0.25923 86.479 -3.49983 141.545 6.00016 154.5C11.5001 162 27.0002 165 52.0002 162C46.0002 140.5 65.0002 108.5 52.0002 69.5Z"
          fill={color}
        />
      </svg>
    </Styled>
  );
};

Hair.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Hair;
