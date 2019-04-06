import React, {Component} from 'react';
import OrderService from '../../services/OrderService'

class CarItem extends Component{
  deleteProduct = (e) => {
    OrderService.deleteProduct()
    .then(order => console.log(order));
  }

  render(){
  console.log(this.props);
  return (
    <div className="media">
      <img src={this.props.product.image} className="mr-3" alt="..." />
      <div className="media-body">
        <h5 className="mt-0">{this.props.product.name}</h5>
        <p>${this.props.product.price}</p>
        <button onClick={(e) => this.deleteProduct(e)}>delete</button>
      </div>
    </div>
  );
  }
};

export default CarItem;