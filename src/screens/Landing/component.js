import React, { useState, useCallback } from 'react';

import Body from '../../components/Body';
import ColorOption from '../../components/ColorOption';
import useWindowSize from '../../hooks/useWindowSize';
import Styled from './styles';

const initialColors = {
  body: '#458FFF',
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
        </div>
        <div className="body">
          <div className="preview">
            <Body className="preview__body" color={colors.body} />
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default Landing;
