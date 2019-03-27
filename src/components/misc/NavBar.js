import React, { Component } from 'react';
import ProductService from '../../services/ProductService';
class NavBar extends Component {
  state = {
    products: [],
    search: 'imac'
  }

  fetchProducts = () => {
    ProductService.getProducts({ product: this.state.search })
      .then(products => console.log({ products }))
  }

  handleSubmit = (event) => {
    this.setState({
      search: event.target.value
    })
    console.log(this.state.search);
  }
  
  render(){
    this.fetchProducts();
    return(
    <nav className="navbar navbar-dark bg-dark text-light">
      <a className="navbar-brand ">Navbar</a>
      <form className="form-inline">
      {/* textarea name="textareaInputValue" value={this.props.inputValue} onChange={e => this.props.Filter(e.target.value)}/> */}
        <input className="form-control mr-sm-2" name="search" type="search" placeholder="Search" value={this.props.search} aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onSubmit={event => this.handleSubmit(event)}>Search</button>
      </form>
    </nav>
   
    )
  }
}

export default NavBar;