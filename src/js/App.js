import React, { Component } from 'react';
import '../css/App.css';
import '../css/header.css';
import '../css/footer.css';
import '../css/carousel.css';
import '../css/introduction.css';
import '../css/path.css';
import AppCarousel from './carousel';
import Header from './header';
import Footer from './footer';
import Introduction from './introduction';
import Path from './path/path';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AppCarousel/>
        <Introduction/>
        <Path/>
        <Footer/>
      </div>
    );
  }
}

export default App;
