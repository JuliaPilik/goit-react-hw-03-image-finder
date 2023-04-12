import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends React.Component {
  state = {
    keyword: '',
  };

  handleFormSubmit = keyword => {
    this.setState({ keyword });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.keyword} />
      </div>
    );
  }
}
