import React, { useState, useCallback, useEffect } from 'react';

import Options from '../Options';
import OptionLabel from '../OptionLabel';
import Styled, { OptionContainer } from './styles';

const Footer = () => {
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
        <Options toggledOption={toggledOption} />
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
          isSelected={toggledOption === 'BEARD'}
          label="Beard"
          onClick={() => toggle('BEARD')}
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

export default Footer;
