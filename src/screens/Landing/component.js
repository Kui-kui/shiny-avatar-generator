import React, { useState, useCallback } from 'react';

import Clothes from '../../components/Clothes';
import ColorOption from '../../components/ColorOption';
import useWindowSize from '../../hooks/useWindowSize';
import Styled from './styles';

const initialColors = {
  clothes: '#458FFF',
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
            color={colors.clothes}
            label="Clothes color"
            onChange={onColorChange('clothes')}
          />
        </div>
        <div className="body">
          <div className="preview">
            <Clothes className="preview__clothes" color={colors.clothes} />
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default Landing;
