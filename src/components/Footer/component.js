import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import Options from '../Options';
import OptionLabel from '../OptionLabel';
import Styled, { OptionContainer } from './styles';

const Footer = ({
  clothes,
  colors,
  haircut,
  onColorChange,
  setClothes,
  setHaircut,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [toggledOption, setToggledOption] = useState('');
  const [footerHeight, setFooterHeight] = useState(0);

  const toggle = useCallback(
    (option) => {
      if (option === toggledOption) {
        setToggledOption('');
      } else {
        setToggledOption(option);
      }
    },
    [toggledOption, setToggledOption],
  );

  const toggleFooter = useCallback(() => {
    setIsHidden(!isHidden);
    if (toggledOption !== '') setToggledOption('');
  }, [isHidden, setIsHidden, setToggledOption, toggledOption]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const height = document.getElementById('footer').clientHeight;
    setFooterHeight(height);
  }, []);

  return (
    <Styled footerHeight={footerHeight} id="footer" isHidden={isHidden}>
      <div className="toggle" onClick={toggleFooter}>
        <p className="toggleChevron">▾</p>
      </div>
      <OptionContainer isHidden={toggledOption === ''}>
        <Options
          clothes={clothes}
          colors={colors}
          haircut={haircut}
          onColorChange={onColorChange}
          setClothes={setClothes}
          setHaircut={setHaircut}
          toggledOption={toggledOption}
        />
      </OptionContainer>
      <div className="labels">
        <OptionLabel
          isSelected={toggledOption === 'SKIN_COLOR'}
          label="Skin color"
          onClick={() => toggle('SKIN_COLOR')}
        />
        <OptionLabel
          isSelected={toggledOption === 'HAIRCUT'}
          label="Haircut"
          onClick={() => toggle('HAIRCUT')}
        />
        <OptionLabel
          isSelected={toggledOption === 'HAIR_COLOR'}
          label="Hair color"
          onClick={() => toggle('HAIR_COLOR')}
        />
        <OptionLabel
          isSelected={toggledOption === 'CLOTHES'}
          label="Clothes"
          onClick={() => toggle('CLOTHES')}
        />
        <OptionLabel
          isSelected={toggledOption === 'CLOTHES_COLOR'}
          label="Clothes color"
          onClick={() => toggle('CLOTHES_COLOR')}
        />
      </div>
    </Styled>
  );
};

Footer.propTypes = {
  clothes: PropTypes.string.isRequired,
  colors: PropTypes.shape({
    body: PropTypes.string.isRequired,
    clothes: PropTypes.string.isRequired,
    hair: PropTypes.string.isRequired,
  }).isRequired,
  haircut: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
  setClothes: PropTypes.func.isRequired,
  setHaircut: PropTypes.func.isRequired,
};

export default Footer;
