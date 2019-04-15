import React from 'react';
import {inject, observer} from 'mobx-react';

import './Product.scss';

@inject('cart')
@observer
class Product extends React.Component {
  render() {
     return (
      <div className="productComponent">
        <div className="productInfo">
          <img src={`/assets/${this.props.id}.png`} alt={this.props.title} />
          <h2>{this.props.title}</h2>
        </div>
        <div className="cartOverlay">
          <button onClick={() => {this.props.cart.addProduct(this.props.id)}}>Add to Cart</button>
        </div>
      </div>
    )   
  }
}

export default Product
