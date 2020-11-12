import PropTypes from 'prop-types';
import React from 'react';

import { Color, Image } from './styles';

const Thumbnail = ({ isSelected, onClick, imgSrc, color }) => {
  return color ? (
    <Color color={color} isSelected={isSelected} onClick={onClick} />
  ) : (
    <Image
      alt={imgSrc}
      isSelected={isSelected}
      onClick={onClick}
      src={imgSrc}
    />
  );
};

Thumbnail.propTypes = {
  color: PropTypes.string,
  imgSrc: PropTypes.string,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Thumbnail;
