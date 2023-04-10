import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
//import Modal from './Modal/Modal';

export class App extends React.Component {
  state = {
    keyword: '',
   
  }

 
  handleFormSubmit = keyword => {
    //console.log(keyword);
    this.setState({keyword});
  }

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101'
        }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.keyword} />
        
      </div>
    );
  }
}
