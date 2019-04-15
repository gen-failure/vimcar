import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject('products')
@observer
class Shop extends Component {

  componentDidMount() {
    this.props.products.getProducts();
  }

  render() {
    return (
      <div className="Shop Component">
        <h1>Coming soon!</h1>
        <ul>
          {this.props.products.items.map((item) => {
            return <li key={item.id}>{item.title}</li>
          })}
        </ul>
      </div>

    );
  }
}

export default Shop;
