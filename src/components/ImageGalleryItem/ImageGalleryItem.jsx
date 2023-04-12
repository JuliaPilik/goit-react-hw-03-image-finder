import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, imgSrc, alt, onOpenModal }) => (
  <li
    className={css.ImageGalleryItem}
    key={id}
    onClick={() => onOpenModal(imgSrc)}
  >
    <img src={imgSrc} alt={alt} className={css.ImageGalleryItem_image} />
  </li>
);
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onOpenModal: PropTypes.func.isRequired,
};
