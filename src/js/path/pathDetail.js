import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Radar from 'react-d3-radar';

class PathDetail extends Component {
  render() {
    var divStyle = {
      backgroundImage: 'url(' + this.props.imgSrc + ')',
      backgroundSize: 'cover'
    };
    return (
      <div className="path-detail-wrapper" style={divStyle}>
        <div className="path-detail-info">
          <div className="path-detail-title">{this.props.title}</div>
          <div className="path-detail-level">{this.props.level}</div>
          <div className="path-detail-instructor">{this.props.instructor}</div>
          <div className="path-detail-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a tellus nisi. Praesent ante nibh, efficitur non dignissim vel, bibendum eu urna. Aenean auctor est eu risus rutrum feugiat. Maecenas id purus nisl. Sed sed nunc in mauris fringilla laoreet tincidunt lacinia urna. Fusce hendrerit pretium turpis ac pellentesque. Sed ac nunc efficitur lorem blandit porta.
          </div>
          <div className="path-detail-button">
            <Button className="path-detail-btn-view">
              <i className="fa fa-align-left"></i>
              <span>VIEW PATH</span>
            </Button>
            <Button className="path-detail-btn-add">
              <i className="fa fa-plus"></i>
              <span>ADD TO MY PATH</span>
            </Button>
          </div>
        </div>
        <div className="path-detail-chart">
          <a className="path-detail-chart-what">What is this?</a>
          <Radar
            width={450}
            height={450}
            padding={70}
            domainMax={10}
            highlighted={null}
            data={{
              variables: [
                {key: 'skill1', label: 'Skill 1'},
                {key: 'skill2', label: 'Skill 2'},
                {key: 'skill3', label: 'Skill 3'},
                {key: 'skill4', label: 'Skill 4'},
                {key: 'skill5', label: 'Skill 5'},
                {key: 'skill6', label: 'Skill 6'}
              ],
            sets: [
                {
                  key: 'placeholder',
                  label: 'My placeholder',
                  values: {
                    skill1: 4,
                    skill2: 6,
                    skill3: 7,
                    skill4: 2,
                    skill5: 8,
                    skill6: 1
                  },
                },
              ],
            }}
          />
          <div className="path-detail-chart-checkbox">
            <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" defaultValue="value1"/>
            <label htmlFor="styled-checkbox-1">Obtained skill after this path</label>
          </div>
        </div>
      </div>
    );
  }
}

export default PathDetail;