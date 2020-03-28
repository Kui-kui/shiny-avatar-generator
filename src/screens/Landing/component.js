import React, { useState, useCallback } from 'react';

import Body from '../../components/SVG/Body';
import Clothes from '../../components/SVG/Clothes';
import ColorOption from '../../components/ColorOption';
import Hair from '../../components/SVG/Hair';
import useWindowSize from '../../hooks/useWindowSize';
import Styled from './styles';

const initialColors = {
  body: '#FFE9D0',
  clothes: '#458FFF',
  hair: '#FFD947',
};

const Landing = () => {
  const { height } = useWindowSize();
  const [colors, setColors] = useState(initialColors);

  const onColorChange = useCallback((key) => ({ hex }) =>
    setColors({ ...colors, [key]: hex }),
  );

  return (
    <Styled height={height}>
      <div className="root">
        <div className="sidebar">
          <ColorOption
            color={colors.body}
            label="Body color"
            onChange={onColorChange('body')}
          />
          <ColorOption
            color={colors.clothes}
            label="Clothes color"
            onChange={onColorChange('clothes')}
          />
          <ColorOption
            color={colors.hair}
            label="Hair color"
            onChange={onColorChange('hair')}
          />
        </div>
        <div className="body">
          <div className="preview">
            <Clothes color={colors.clothes} />
            <Body color={colors.body} />
            <Hair color={colors.hair} />
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default Landing;
