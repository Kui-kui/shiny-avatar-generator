/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import PropTypes from 'prop-types';
import React from 'react';

import { Preview, Root } from './styles';

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
        <div key={haircutId} onClick={() => setHaircut(haircutId)}>
          <Preview
            alt={haircutId}
            isSelected={haircutId === haircut}
            src={require(`./assets/${haircutId}.png`)}
          />
        </div>
      ))}
    </Root>
  );
};

HairColorOption.propTypes = {
  haircut: PropTypes.string.isRequired,
  setHaircut: PropTypes.func.isRequired,
};

export default HairColorOption;
