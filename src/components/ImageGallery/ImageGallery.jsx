import React from 'react';
import css from './ImageGallery.module.css';
import { getImageGallery } from '../../api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';

class ImageGallery extends React.Component {
  state = {
    images: [],
    error: '',
    showModal: false,
    imageLargeSrc: '',
    page: 1,
    per_page: 12,
    totalResult: 0,
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      this.setState({ page: 1, images: [], totalResult: 0, loading: true });
    }
    if (this.state.loading) {
      setTimeout(() => {
        getImageGallery(
          this.props.imageName,
          this.state.page,
          this.state.per_page
        )
          .then(res => res.data)
          .then(({ hits, totalHits }) => {
            this.setState({
              images: [...this.state.images, ...hits],
              error: '',
              page: this.state.page + 1,
              totalResult: totalHits,
            });
            this.setState({ loading: false });
          })
          .catch(error => {
            this.setState({ error: error.message });
          })
          .finally(() => {
            this.setState({ loading: false });
          });
      }, 600);
    }
  }
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  insertImgInModal = srcImg => {
    this.toggleModal();
    this.setState({ imageLargeSrc: srcImg });
  };
  loadMore = () => {
    if (
      this.state.images.length < this.state.totalResult &&
      this.state.images.length > 0
    ) {
      this.setState({ loading: true });
    }
  };

  render() {
    const { images, showModal, totalResult, loading } = this.state;

    return (
      <div>
        <ul className={css.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              imgSrc={webformatURL}
              alt={tags}
              onOpenModal={this.insertImgInModal}
            />
          ))}
        </ul>
        {showModal && (
          <Modal
            largeImg={this.state.imageLargeSrc}
            toggleModal={this.toggleModal}
          />
        )}
        {loading && <Loader />}
        {images.length > 0 && images.length < totalResult && !loading && (
          <Button onClick={this.loadMore} />
        )}
      </div>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  imageName: PropTypes.string,
};
