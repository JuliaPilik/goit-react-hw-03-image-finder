import React from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export default class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModalByEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModalByEsc);
  }

  closeModalByEsc = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  render() {
    return (
      <div
        className={css.Modal__backdrop}
        onClick={() => this.props.toggleModal()}
      >
        <div className={css.Modal__content} OnClick={e => e.stopPropagation()}>
          <img src={this.props.largeImg} alt="" className={css.Modal__img} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
