import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from '../core/Dropdown';
import Styled from './styles';

const HAIRCUTS = [
  'BOB_CUT_WITH_BANGS',
  'MEDIUM_TO_LONG',
  'CURLY',
  'LONG_AND_WAVY',
  'LONG_AND_STRAIGHT',
  'BOB_CUT',
  'BUN',
  'PONYTAIL',
  'LONG_AND_VOLUMINOUS',
];

const HairColorOption = ({ isOpen, setHaircut, toggle }) => {
  return (
    <Styled isOpen={isOpen}>
      <Dropdown
        className="picker"
        isOpen={isOpen}
        label="2. Haircut"
        toggle={toggle}
      >
        {HAIRCUTS.map((haircut) => (
          <div
            key={haircut}
            className="haricutOption"
            onClick={() => setHaircut(haircut)}
          >
            <p>{haircut}</p>
          </div>
        ))}
      </Dropdown>
    </Styled>
  );
};

HairColorOption.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setHaircut: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default HairColorOption;
