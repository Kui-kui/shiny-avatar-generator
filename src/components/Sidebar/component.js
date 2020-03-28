import React from 'react';
import PropTypes from 'prop-types';

import ColorOption from '../ColorOption';
import Styled from './styles';
import useWindowSize from '../../hooks/useWindowSize';

const Sidebar = ({ colors, onChange }) => {
  const { height } = useWindowSize();
  return (
    <Styled height={height}>
      <p className="headline">Shiny Avatar Generator</p>
      <ColorOption
        color={colors.body}
        label="Body color"
        onChange={onChange('body')}
      />
      <ColorOption
        color={colors.clothes}
        label="Clothes color"
        onChange={onChange('clothes')}
      />
      <ColorOption
        color={colors.hair}
        label="Hair color"
        onChange={onChange('hair')}
      />
    </Styled>
  );
};

Sidebar.propTypes = {
  colors: PropTypes.shape({
    body: PropTypes.string.isRequired,
    clothes: PropTypes.string.isRequired,
    hair: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sidebar;
