import React, { Component } from 'react';

class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: props
    }
  }


  
  render(){
    console.log(this.state.products);
    return(
     
          <div className="col-8 col-sm-8 col-md-6 col-lg-2 mb-2 mt-2">
            <img className="card-img-top" src={this.state.products.galleryURL} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">{this.state.products.title}</p>
              <p className="card-text">{this.state.products.sellingStatus[0].currentPrice[0].__value__}</p>
            </div>
          </div>
    
   
    )
  }
}

export default ProductItem;