import React, {Component} from 'react';
import OrderService from '../../services/OrderService'

class CarItem extends Component{
  deleteProduct = () => {
    const product = this.props.product;
    this.props.onDelete(product._id)
    OrderService.deleteProduct(product._id)
      .then(order => {
        console.log(order)
      });
  }

  render(){
    
  return (
    <div className="media mt-3 mb-3">
      <img src={this.props.product.image} className="mr-3" alt="..." />
      <div className="media-body">
        <h5 className="mt-0">{this.props.product.name}</h5>
        <p>${this.props.product.price}</p>
        <button className="btn-danger" onClick={(e) => this.deleteProduct(e)}>delete</button>
      </div>
    </div>
  );
  }
};

export default CarItem;