import React, { Component } from 'react';
import ProductService from '../../services/ProductService';
import ProductItem from './ProductItem';

class ProductList extends Component {
  state = {
    products: []
  }

  fetchProducts = () => {
    ProductService.getProducts()
      .then(products => this.setState({ products }))
  }
  componentDidMount() {
    this.fetchProducts();
  }
  render(){
    // this.fetchProducts();
    return(
      <div className='row'>
      {this.state.products.map((product, i) => 
         <ProductItem {...product} key={i}></ProductItem>
      )}
      </div>
    )
  }
}

export default ProductList;