import React, { Component } from 'react';

class ProductItem extends Component {  
  render(){
    return(
      <div className="col-8 col-sm-8 col-md-6 col-lg-3 mb-3 mt-3"
        onClick={() => this.props.onClick(this.props.product)}>
        <img className="card-img-top img-thumbnail h-50 w-75" src={this.props.product.galleryURL} alt="products" />
        <div className="card-body">
          <p className="card-text">{this.props.product.title[0]}</p>
          <p className="card-text">{this.props.product.sellingStatus[0].currentPrice[0].__value__}</p>
        </div>
      </div>
    
   
    )
  }
}

export default ProductItem;