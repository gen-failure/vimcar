import React from 'react';

import vimcarLogo from './images/vimcar-logo.svg';
import cartIcon from './images/cart.svg';

import './Toolbar.scss';

class Toolbar extends React.Component {
  render() {
    return (
      <header className="toolbarComponent">
        <div className="headline">
          <img src={vimcarLogo} alt="" />
        </div>
        <div className="cartIcon">
          <img src={cartIcon} alt="" />
          <span className="pill">0</span>
        </div>
      </header>
    )
  }
}

export default Toolbar;
