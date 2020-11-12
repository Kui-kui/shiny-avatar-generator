/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import PropTypes from 'prop-types';
import React from 'react';
import Thumbnail from '../Thumbnail';

import { Root } from './styles';

const ImagePicker = ({ images, onClick, selectedImage, pathPrefix }) => {
  return (
    <Root>
      {images.map((image) => (
        <Thumbnail
          key={image}
          imgSrc={require(`../../../assets/${pathPrefix}/${image}.png`)}
          isSelected={image === selectedImage}
          onClick={() => onClick(image)}
        />
      ))}
    </Root>
  );
};

ImagePicker.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  pathPrefix: PropTypes.string.isRequired,
  selectedImage: PropTypes.string.isRequired,
};

export default ImagePicker;
