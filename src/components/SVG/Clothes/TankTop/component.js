import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

const TankTop = ({ color }) => (
  <Styled>
    <svg className="clothes" height="152" viewBox="0 0 186 152" width="186">
      <path
        d="M16.5228 38.3193C15.7175 53.0612 14.4172 68.7243 12.5325 79.3622C16.4001 80.7985 21.4786 83.1237 27.4257 85.8466C45.8411 94.278 72.5857 106.523 97.5 108C126.861 109.741 155.333 92.3283 165.65 86.0195C165.948 85.8368 166.232 85.6634 166.5 85.5C166.627 85.6331 166.753 85.7666 166.879 85.9005C168.882 76.3909 170.742 64.5737 172.27 53.1848C174.423 37.1485 175.902 22.1015 176.203 15.7696L179.2 15.9124C178.892 22.3721 177.4 37.5182 175.244 53.5839C173.6 65.8313 171.559 78.6947 169.345 88.6941C190.864 114.615 186.236 152.321 183.136 177.567V177.567C182.257 184.734 181.5 190.896 181.5 195.5C181.5 205.046 147.31 194.191 104.914 180.73L104.914 180.73C70.9197 169.937 31.6503 157.469 0.500064 152.5C0.176382 137.287 1.51854 102.209 9.28782 80.4134C11.2905 70.0218 12.6795 53.6743 13.5272 38.1557C14.4098 21.9996 14.6987 6.88289 14.5007 0.546829L17.4993 0.453125C17.7013 6.91706 17.4069 22.1336 16.5228 38.3193Z"
        fill={color}
      />
    </svg>
  </Styled>
);

TankTop.propTypes = {
  color: PropTypes.string.isRequired,
};

export default TankTop;