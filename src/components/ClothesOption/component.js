/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from '../core/Dropdown';
import Styled, { Preview } from './styles';

const CLOTHES_IDS = [
  'SWEATER',
  'TANK_TOP',
  'STRIPED_JERSEY',
  'CARDIGAN',
  'FLOWERY_TEE',
  'TEE',
  'JACKET',
];

const ClothesOption = ({ clothes, isOpen, setClothes, toggle }) => {
  return (
    <Styled isOpen={isOpen}>
      <Dropdown
        className="picker"
        isOpen={isOpen}
        label="4. Clothes"
        toggle={toggle}
      >
        <div className="haircutContainer">
          {CLOTHES_IDS.map((clothesId) => (
            <div key={clothesId} onClick={() => setClothes(clothesId)}>
              <Preview
                alt={clothesId}
                className="haircutPreview"
                isSelected={clothesId === clothes}
                src={require(`./assets/${clothesId}.png`)}
              />
            </div>
          ))}
        </div>
      </Dropdown>
    </Styled>
  );
};

ClothesOption.propTypes = {
  clothes: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setClothes: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ClothesOption;
