import React from 'react';
import {inject, observer} from 'mobx-react';

import vimcarLogo from './images/vimcar-logo.svg';
import cartIcon from './images/cart.svg';

import './Toolbar.scss';

@inject('cart')
@observer
class Toolbar extends React.Component {
  render() {
    return (
      <header className="toolbarComponent">
        <div className="headline">
          <img src={vimcarLogo} alt="" />
        </div>
        <div className="cartIcon">
          <img src={cartIcon} alt="" />
          <span className="pill">{this.props.cart.itemsLength}</span>
        </div>
      </header>
    )
  }
}

export default Toolbar;
