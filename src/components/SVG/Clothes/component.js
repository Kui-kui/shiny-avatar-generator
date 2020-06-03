import React from 'react';
import PropTypes from 'prop-types';

import Cardigan from './Cardigan';
import FloweryTee from './FloweryTee';
import Jacket from './Jacket';
import Sweater from './Sweater';
import StripedJersey from './StripedJersey';
import TankTop from './TankTop';
import Tee from './Tee';

const Clothes = ({ clothes, color }) => {
  switch (clothes) {
    case 'CARDIGAN':
      return <Cardigan color={color} />;
    case 'FLOWERY_TEE':
      return <FloweryTee color={color} />;
    case 'JACKET':
      return <Jacket color={color} />;
    case 'STRIPED_JERSEY':
      return <StripedJersey color={color} />;
    case 'SWEATER':
      return <Sweater color={color} />;
    case 'TANK_TOP':
      return <TankTop color={color} />;
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
