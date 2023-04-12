import React from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <div className={css.Load_more}>
    <button onClick={() => onClick()} className={css.Button}>
      Load More
    </button>
  </div>
);
export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
