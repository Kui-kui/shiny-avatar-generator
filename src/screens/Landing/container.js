import React, { useCallback, useState } from 'react';

import { LandingContext } from '../../common/context';
import Landing from './component';

const initialColors = {
  body: '#FFE9D0',
  clothes: '#458FFF',
  hair: '#FFD947',
};

const LandingContainer = () => {
  const [colors, setColors] = useState(initialColors);
  const [beard, setBeard] = useState('LONG_BEARD');
  const [clothes, setClothes] = useState('CARDIGAN');
  const [haircut, setHaircut] = useState('BOB_CUT_WITH_BANGS');

  const onColorChange = useCallback(
    (key) => (hex) => setColors({ ...colors, [key]: hex }),
    [colors, setColors],
  );

  const context = {
    beard,
    clothes,
    colors,
    haircut,
    setBeard,
    setClothes,
    setColor: onColorChange,
    setColors,
    setHaircut,
  };

  return (
    <LandingContext.Provider value={context}>
      <Landing />
    </LandingContext.Provider>
  );
};

export default LandingContainer;
