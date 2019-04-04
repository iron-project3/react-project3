import React, { Component} from 'react';
import OrderService from '../../services/OrderService';
import { withAuthConsumer } from '../../context/AuthStore';

class Cart extends Component {
  state = {
    productIds: [],
  }

  handleCart = () => {
    OrderService.getOrder(this.props.user.id)
      .then(order => {
        const productArr = [];
        for(var i = 0; i < order.length; i++){
          productArr.push(order[i].product[0]);
        }
        this.setState({
          ...this.state,
          productIds: productArr,
        })
        // console.log("state:" + this.state.productIds)
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.handleCart();
  }
  
  render(){
    // const user = this.props;
    return(
      <div>
        hello
      </div>
    )
  }
}

export default  withAuthConsumer (Cart);










