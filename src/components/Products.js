import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'
import {inject,observer} from 'mobx-react';
import Product from './Product';

import './Products.scss';

@inject('products')
@observer
class Products extends Component {
  
  componentDidMount() {
    this.props.products.getProducts();
  }

  render() {
    return (
      <Grid className="productsComponent">
        <Row>
          {this.props.products.items.map((item) => {
            return (
              <Col lg={3} md={6} sm={12} key={`product-id-${item.id}`}>
                <Product title={item.title} id={item.id} />
              </Col>
            )
          })}
        </Row>
      </Grid>
    )
  }
}

export default Products;
