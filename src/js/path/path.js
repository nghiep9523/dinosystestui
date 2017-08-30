import React, { Component } from 'react';
import Slider from 'react-slick';
import PathItem from './pathItem';
import PathDetail from './pathDetail';

class Path extends Component {
  constructor() {
    super();

    this.state = {
      selected: -1,
      title: '',
      level: '',
      instructor: '',
      imgSrc: ''
    }

    this.placeholderData = [
      {
        title: 'Trinity 1',
        level: 'Level Instrument',
        instructor: 'Ms. Jonny',
        imgSrc: 'https://allwallpapers.info/wp-content/uploads/2016/05/8081-playing-the-guitar-1920x1080-music-wallpaper.jpeg'
      },
      {
        title: 'Trinity 2',
        level: 'Level Instrument',
        instructor: 'Ms. Jonny',
        imgSrc: 'https://livewallpaper.info/wp-content/uploads/2017/02/guitar-wallpaper-High-Resolution-Download1.jpg'
      },
      {
        title: 'Trinity 3',
        level: 'Level Instrument',
        instructor: 'Ms. Jonny',
        imgSrc: 'http://wallpaper.pickywallpapers.com/1920x1080/taylor-guitar.jpg'
      },
      {
        title: 'Trinity 4',
        level: 'Level Instrument',
        instructor: 'Ms. Jonny',
        imgSrc: 'https://wallpapercave.com/wp/YnXBXD3.jpg'
      },
      {
        title: 'Trinity 5',
        level: 'Level Instrument',
        instructor: 'Ms. Jonny',
        imgSrc: 'https://allwallpapers.info/wp-content/uploads/2016/05/4288-guitar-1920x1080-music-wallpaper.jpeg',
      },
      {
        title: 'Trinity 6',
        level: 'Level Instrument',
        instructor: 'Ms. Jonny',
        imgSrc: 'http://eskipaper.com/images/acoustic-guitar-2.jpg'
      },
      {
        title: 'Trinity 7',
        level: 'Level Instrument',
        instructor: 'Ms. Jonny',
        imgSrc: 'http://www.mrwallpaper.com/wallpapers/Electric-Guitar-1920x1080.jpg',
      },
      {
        title: 'Trinity 8',
        level: 'Level Instrument',
        instructor: 'Ms. Jonny',
        imgSrc: 'http://eskipaper.com/images/acoustic-guitar-wallpaper-2.jpg'
      }      
    ]
  }

  componentWillMount() {
      this.setState({
        title: this.placeholderData[0].title,
        level: this.placeholderData[0].level,
        instructor: this.placeholderData[0].instructor,
        imgSrc: this.placeholderData[0].imgSrc
      })  
  }

  _initPathItem() {
    let items = this.placeholderData.map((currentValue, i) => {
      let activeClass = 'path-slider-item',
          ref  = 'item' + i;
      if (this.state.selected === i) {
        activeClass += ' path-item-active';
      }
      let item = (
        <div className={activeClass} key={i} ref={ref}>
          <PathItem itemId={i} title={currentValue.title} level={currentValue.level} instructor={currentValue.instructor}
            selected={this.state.selected} imgSrc={currentValue.imgSrc} 
            onClick={this.selectPath.bind(this, i, currentValue.title, currentValue.level, currentValue.instructor, currentValue.imgSrc)}/>
        </div>
        );
      return item;
    });
    return items;
  }

  selectPath(i, title, level, instructor, imgSrc) {
    this.setState({selected: i,
      title: title,
      level: level,
      instructor: instructor,
      imgSrc: imgSrc
    })  
  }

  render() {   
    let items = this._initPathItem();
    return (
      <div className="path-list-wrapper">
        <div className="path-header">
          <div className="path-title">
            <span>POPULAR PATH</span>
          </div>
          <div className="path-controls">
            <div className="path-search">
              <input type="text" placeholder="Refine Search"/>
            </div>
            <div className="path-view">
              <a src="#">View all paths</a>
            </div>
          </div>
        </div>
        <div className="path-carousel">
          <Slider slidesToScroll={3}
                  slidesToShow={4}
                  speed={500}
                  centerMode="true">
            {items}
          </Slider>
        </div>
        <PathDetail title={this.state.title} level={this.state.level} instructor={this.state.instructor}
          imgSrc={this.state.imgSrc}/>
      </div>
    );
  }
}

export default Path;