import React, { Component } from 'react';
import ProductService from '../../services/ProductService';
import OrderService from '../../services/OrderService';
import ProductItem from './ProductItem';
import { withAuthConsumer } from '../../context/AuthStore';
import { Redirect } from 'react-router-dom';

class ProductList extends Component {
  state = {
    products: [],
    search: "imac",
    productDetail: null,
    similar: [],
    toLogin: false
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

  similarProducts = (categoryId) => {
    ProductService.getProductsByCategory({
      category: categoryId
    }).then(products => {
      this.setState({
        ...this.state,
        similar: products
      })
    })
  }

  handleClickProduct = (productDetail) => {
    this.setState({
      ...this.state,
      productDetail
    })
  }

  handleClickBack = () => {
    this.setState({
      ...this.state,
      productDetail: null
    })
  }

  handleAddCart = (product) => {
    if (this.props.isAuthenticated()) {
      ProductService.saveProduct(product)
      .then(product => {
        OrderService.createOrder(product)
        .then(order => {
          console.log(order)
        }).catch((err) => console.log(err));
      }).catch((err) => console.log(err));
      
    } else {
      this.setState({
        toLogin: true
      })
    }
  }



  render() {
    if (this.state.toLogin) {
      return (<Redirect to='/login' />);
    }
    
    if (this.state.productDetail) {
      return(
        <div className="card text-white bg-dark mb-3 detail-card">
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-4">
              <img src={this.state.productDetail.galleryURL} className="card-img img-thumbnail h-300 w-150" alt="..." />
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.state.productDetail.title}</h5>
                <p className="card-text">{this.state.productDetail.subtitle}</p>
                <h6 className="text-white ">${this.state.productDetail.sellingStatus[0].currentPrice[0].__value__}</h6>
                <div className="btn-toolbar">
                  <button type="button" className="btn btn-primary mx-auto " onClick={() => this.handleAddCart(this.state.productDetail)}>Add to Cart</button>
                  <button type="button" className="btn btn-danger mx-auto " onClick={() => this.handleClickBack()}>Go Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  
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
          <ProductItem product={product} key={i} onClick={this.handleClickProduct}></ProductItem>
        )}
      </div>
    </div>
    )
  }
}

export default withAuthConsumer(ProductList);