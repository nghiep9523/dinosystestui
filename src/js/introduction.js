import React, { Component } from 'react';

class Introduction extends Component {
  render() {
    return (
      <div className="intro-wrapper">
        <div className="intro">
          <div className="intro-title">
            <span>HOW DOES IT WORKS?</span>
          </div>
          <div className="intro-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at suscipit nunc. Vivamus ut lectus a nunc malesuada bibendum viverra ut erat.
          </div>
        </div>
        <div className="intro-video">
          <iframe width="480" height="270" src="https://www.youtube.com/embed/7QEi7ZKkVHU" frameBorder="0" allowFullScreen title="intro"></iframe>
        </div>
      </div>
    );
  }
}

export default Introduction;