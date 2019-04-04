import React, { Component} from 'react';
import OrderService from '../../services/OrderService';
import { withAuthConsumer } from '../../context/AuthStore';

class Cart extends Component {
  state = {
    products: [],
  }

  handleCart = () => {
    OrderService.getOrder(this.props.user.id)
      .then(order => {
        console.log(order)
      }).catch((err) => console.log(err));
  }

  componentDidMount() {
    this.handleCart();
  }
  
  render(){
    const user = this.props;
    // console.log(user);
    return(
      <div>
        hello
      </div>
    )
  }
}

export default  withAuthConsumer (Cart);










