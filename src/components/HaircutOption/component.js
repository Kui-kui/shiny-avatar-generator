/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from '../core/Dropdown';
import Styled, { Preview } from './styles';

const HAIRCUT_IDS = [
  'BOB_CUT_WITH_BANGS',
  'CURLY',
  'LONG_AND_WAVY',
  'LONG_AND_STRAIGHT',
  'BOB_CUT',
  'BUN',
  'PONYTAIL',
  'LONG_AND_VOLUMINOUS',
];

const HairColorOption = ({ isOpen, haircut, setHaircut, toggle }) => {
  return (
    <Styled isOpen={isOpen}>
      <Dropdown
        className="picker"
        isOpen={isOpen}
        label="2. Haircut"
        toggle={toggle}
      >
        <div className="haircutContainer">
          {HAIRCUT_IDS.map((haircutId) => (
            <div key={haircutId} onClick={() => setHaircut(haircutId)}>
              <Preview
                alt={haircutId}
                className="haircutPreview"
                isSelected={haircutId === haircut}
                src={require(`./assets/${haircutId}.png`)}
              />
            </div>
          ))}
        </div>
      </Dropdown>
    </Styled>
  );
};

HairColorOption.propTypes = {
  haircut: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setHaircut: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default HairColorOption;
