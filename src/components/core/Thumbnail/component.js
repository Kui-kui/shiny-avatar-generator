import PropTypes from 'prop-types';
import React from 'react';

import { Color, Image, Root } from './styles';

const Thumbnail = ({ isSelected, onClick, imgSrc, color }) => {
  return (
    <Root backgroundColor={color} isSelected={isSelected} onClick={onClick}>
      {color ? <Color color={color} /> : <Image alt={imgSrc} src={imgSrc} />}
    </Root>
  );
};

Thumbnail.propTypes = {
  color: PropTypes.string,
  imgSrc: PropTypes.string,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Thumbnail;
