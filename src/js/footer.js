import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="app-footer">
        <div className="app-footer-social">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-pinterest-p"></i>
          <i className="fa fa-google-plus"></i>
        </div>
        <div className="app-footer-contact">
          <a className="footer-aboutus">About Us</a>
          <span>|</span>
          <a className="footer-contact">Contact</a>
          <span>|</span>
          <a className="footer-contact">Faq</a>
        </div>
      </div>
    );
  }
}

export default Footer;