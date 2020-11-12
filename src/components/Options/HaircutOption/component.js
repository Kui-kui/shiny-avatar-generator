/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import PropTypes from 'prop-types';
import React from 'react';
import Thumbnail from '../../core/Thumbnail';

import { Root } from './styles';

const HAIRCUT_IDS = [
  'BOB_CUT_WITH_BANGS',
  'CURLY',
  'LONG_AND_WAVY',
  'LONG_AND_STRAIGHT',
  'BOB_CUT',
  'BUN',
  'PONYTAIL',
  'LONG_AND_VOLUMINOUS',
  'SHORT_BOB_CUT',
];

const HairColorOption = ({ haircut, setHaircut }) => {
  return (
    <Root>
      {HAIRCUT_IDS.map((haircutId) => (
        <Thumbnail
          key={haircutId}
          imgSrc={require(`./assets/${haircutId}.png`)}
          isSelected={haircutId === haircut}
          onClick={() => setHaircut(haircutId)}
        />
      ))}
    </Root>
  );
};

HairColorOption.propTypes = {
  haircut: PropTypes.string.isRequired,
  setHaircut: PropTypes.func.isRequired,
};

export default HairColorOption;
