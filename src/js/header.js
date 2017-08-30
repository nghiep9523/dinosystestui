import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="app-header__logo">
          <span>LOGO</span>
        </div>
        <div className="app-header__controls">
          <a className="language-select">VIETNAMESE</a>
          <a className="register-select">SIGN UP / LOG IN</a>
        </div>
      </div>
    );
  }
}

export default Header;