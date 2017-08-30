import React, { Component } from 'react';

class PathItem extends Component {
  handleClick() {
    alert(this.props.selected);
  }
  render() {
    let selected = this.props.selected,
        itemId = this.props.itemId;
    if (selected !== itemId) {
      return (
        <div className="path-item-wrapper" onClick={this.props.onClick}>
          <img className="img-responsive" src={this.props.imgSrc} alt="placeholder"/>
          <div className="path-item-info">
            <div className="path-item-title">
              {this.props.title}
            </div>
            <div className="path-item-level">
              {this.props.level}
            </div>
            <div className="path-item-instructor">
              {this.props.instructor}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="path-item-wrapper active" onClick={this.props.onClick}>
          <img className="img-responsive" src={this.props.imgSrc} alt="placeholder"/>
          <div className="path-item-info">
            <div className="path-item-title">
              {this.props.title}
            </div>
            <div className="path-item-level">
              {this.props.level}
            </div>
            <div className="path-item-instructor">
              {this.props.instructor}
            </div>
            <div className="path-item-add">
              <i className="fa fa-plus-circle"></i>
            </div>
          </div>
        </div>
      );
    }
    
  }
}

export default PathItem;