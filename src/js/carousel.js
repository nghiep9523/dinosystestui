import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';

class AppCarousel extends Component {
  render() {
    return (
      <div className="carousel-wrapper">
        <Carousel>
          <Carousel.Item>
            <img className="img-responsive" src="http://www.mrwallpaper.com/wallpapers/Guitar-Window-1920x1080.jpg" alt="placeholder"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive" src="http://www.mrwallpaper.com/wallpapers/boy-play-guitar-1920x1080.jpg" alt="placeholder"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive" src="https://i.ytimg.com/vi/fkXdsdmhYz0/maxresdefault.jpg" alt="placeholder"/>
          </Carousel.Item>
        </Carousel>
        <div className="sign-up-block">
          <div className="sign-up-block__slogan">
            <div>DISCOVER YOUR OWN</div>
            <div>PERSONAL MUSIC PATH BY</div>
            <div>FILLING OUT A QUICK FORM.</div>
          </div>
          <Button className="sign-up-block__button">
            <span>SIGN UP NOW</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default AppCarousel;