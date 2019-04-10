import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Sucess extends Component{
  state = {
    keepShoping: false,
  }

  handleKeepShopping(){
    this.setState({
      keepShoping: true
    })
  }

  render(){
    if(!this.state.keepShoping){
      return(
        <div>
          <h3 className="mt-3">Thank you for your purchase! An email will be sent shorly to {this.props.token.email} with your tracking information!!</h3>
          <button type="button" className="btn btn-primary mx-auto mt-3" onClick={() => this.handleKeepShopping()}>Keep Shopping</button>
        </div>
        
      )
    } else {
      return (<Redirect to='/product' />);
    }
  }
};

export default Sucess;