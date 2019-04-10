import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Checkout extends Component{
  state = {
    paid: false
  }
  onToken = (token) => {
    console.log(token);
    this.props.onSale(token);
  }

  onClosed = () =>{
    console.log("closed");
  }
  render(){
  // image="https://yourdomain.tld/images/logo.svg"
  
  if(this.props.price > 1){
    return (
      <StripeCheckout
        amount={this.props.price * 100}
        billingAddress
        description="Awesome Product"
        locale="auto"
        name="Wants"
        stripeKey="pk_test_9vSSIFFnSO0VqJ5SRofGNO6w00Eu2CTEZA"
        token={this.onToken}
        closed={this.onClosed}
        zipCode
      />
    );
  } else {
    return(
      <h1>add payment</h1>
    )
  }
    
  }
};

export default Checkout;
// pk_test_9vSSIFFnSO0VqJ5SRofGNO6w00Eu2CTEZA

// import {CardElement, injectStripe} from 'react-stripe-elements';

// class Checkout extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {complete: false};
//     this.submit = this.submit.bind(this);
//   }

//   async submit(ev) {
//     // User clicked submit
//     let {token} = await this.props.stripe.createToken({name: "Name"});
//     let response = await fetch("/charge", {
//       method: "POST",
//       headers: {"Content-Type": "text/plain"},
//       body: token.id
//     });
  
//     if (response.ok) console.log("Purchase Complete!")
//   }

//   render() {
//     if (this.state.complete) return <h1>Purchase Complete</h1>;

//     return (
//       <div className="checkout">
//         <p>Would you like to complete the purchase?</p>
//         <CardElement />
//         <button onClick={this.submit}>Send</button>
//       </div>
//     );
//   }
// }

// export default injectStripe(Checkout);