import React, { useState, useCallback } from 'react';

import Body from '../../components/SVG/Body';
import Clothes from '../../components/SVG/Clothes';
import Hair from '../../components/SVG/Hair';
import useWindowSize from '../../hooks/useWindowSize';
import Styled from './styles';
import Sidebar from '../../components/Sidebar/component';
import Button from '../../components/Button';

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
        <Sidebar colors={colors} onChange={onColorChange} />
        <div className="body">
          <div className="preview">
            <Clothes color={colors.clothes} />
            <Body color={colors.body} />
            <Hair color={colors.hair} />
          </div>
          <Button
            className="button"
            label="Télécharger"
            onClick={() => console.log('Test')}
          />
        </div>
      </div>
    </Styled>
  );
};

export default Landing;
