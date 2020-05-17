import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from '../core/Dropdown';
import Styled from './styles';

const HAIRCUTS = [0, 1, 2];

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
            <p>{`Haircut n°${haircut}`}</p>
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
