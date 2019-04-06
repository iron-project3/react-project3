import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Checkout extends Component{
  onToken(){
    
  }
  render(){
  // image="https://yourdomain.tld/images/logo.svg"
  return (
    <StripeCheckout
      amount="500"
      billingAddress
      description="Awesome Product"
      locale="auto"
      name="Wants"
      stripeKey="pk_test_9vSSIFFnSO0VqJ5SRofGNO6w00Eu2CTEZA"
      token={this.onToken}
      zipCode
    />
  );
  }
};

export default Checkout;