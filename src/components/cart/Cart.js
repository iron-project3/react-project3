import React, { Component} from 'react';
import OrderService from '../../services/OrderService';
// import ProductService from '../../services/ProductService';
import { withAuthConsumer } from '../../context/AuthStore';
import CartItem from './CartItem';
import Checkout from './Checkout';

class Cart extends Component {
  state = {
    products: [],
    totalPrice: 0
  }

  handleCart = () => {
    OrderService.getOrder(this.props.user.id)
      .then(order => {
        console.log(order)
        this.setState({
          products: order.product || []
        })
        this.getPrice();
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.handleCart();
   
  }

  getPrice(){
    var counter = 0;
    for (var i = 0; i < this.state.products.length; i++){
      counter = counter + this.state.products[i].price;
    }
    this.setState({
      totalPrice: counter
    })
    console.log(counter);
  }

  render() {
    const { products , totalPrice} = this.state;
    if (products.length > 0) {
      return (
        <div className='container'>
          {this.state.products.map((product, i) => 
            <CartItem product={product} key={i}></CartItem>
          )}
          <div className='container'><h3>Total: ${totalPrice}</h3></div>
          <Checkout></Checkout>
      </div>
      );
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

export default  withAuthConsumer (Cart);










