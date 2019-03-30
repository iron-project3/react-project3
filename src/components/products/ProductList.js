import React, { Component } from 'react';
import ProductService from '../../services/ProductService';
import ProductItem from './ProductItem';

class ProductList extends Component {
  state = {
    products: [],
    search: "imac"
  }

  fetchProducts = () => {
    ProductService.getProducts()
      .then(products => this.setState({
        ...this.state,
        products
      }))
  }
  componentDidMount() {
    this.fetchProducts();
  }

  handleOnChange = (event) => {
    this.setState({
      ...this.state,
      search: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    ProductService.getProducts({
      search: this.state.search
    }).then(products => {
      this.setState({
        ...this.state,
        products
      })
    });
  }
  render() {
    return(
    <div>
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
        {/* textarea name="textareaInputValue" value={this.props.inputValue} onChange={e => this.props.Filter(e.target.value)}/> */}
          <input className="form-control mr-sm-2" name="search" type="search" placeholder="Search" value={this.state.search} aria-label="Search" onChange={event => this.handleOnChange(event)} />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      <div className='row'>
        {this.state.products.map((product, i) => 
          <ProductItem {...product} key={i}></ProductItem>
        )}
      </div>
    </div>
    )
  }
}

export default ProductList;