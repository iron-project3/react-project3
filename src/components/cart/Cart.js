import React, { Component} from 'react';
import OrderService from '../../services/OrderService';
import ProductService from '../../services/ProductService';
import { withAuthConsumer } from '../../context/AuthStore';
import CartItem from './CartItem';
// import {Elements, StripeProvider} from 'react-stripe-elements';
import Checkout from './Checkout';
import Sucess from './Sucess';

class Cart extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: [],
      totalPrice: 0,
      sale: false,
      token: {},
      suggestions: []
    };

    this.onSale = this.onSale.bind(this);
  }

  handleCart = () => {
    OrderService.getOrder(this.props.user.id)
      .then(order => {
        this.setState({
          products: order.product || []
        })
        this.getPrice();
      })
      .catch((err) => console.log(err));
    // ProductService.getSuggestions()
    //   .then(suggestions => {
    //     this.setState({
    //       suggestions: suggestions
    //     })
    //     console.log(this.state.suggestions)
    //   })
  }

  handleDeleteProduct = (productId) =>{
    let productCopy = this.state.products
    // productCopy.filter(element => element._id !== product);
    for (var i = 0; i < productCopy.length; i++){
      if(productCopy[i]._id == productId){
        productCopy.splice(i,1);
      }
    }
    this.setState({
      ...this.state,
      products: productCopy
    })
    this.getPrice();
  }

  componentDidMount() {
    this.handleCart();
  }

  onSale(token){
    this.setState({
      ...this.state,
      sale: true,
      products: [],
      token: token
    });
    
  OrderService.deleteOrder()
    .then(order => {
      console.log("deleted " + order)
      console.log(this.state.token)
    });
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
    const { products , totalPrice, sale} = this.state;

    if (products.length > 0) {
      return (
        <div className='container'>
          {this.state.products.map((product, i) => 
            <CartItem product={product} onDelete={this.handleDeleteProduct} key={i}></CartItem>
          )}
          <h3>Total: ${totalPrice}</h3>
          <Checkout price={this.state.totalPrice} this={this} onSale={this.onSale}></Checkout>
        </div>
      );
    } else {
      console.log(sale)
      if (sale){
        return (<Sucess token={this.state.token} to='/sucess' />);
      } else {
        return (
          <div>
            <h3>Your cart is empty please add products to your cart to proceed!</h3>
          </div>
        )
      }
    }
  }
}

export default  withAuthConsumer (Cart);










