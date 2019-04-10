import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withAuthConsumer } from '../../context/AuthStore';
import authService from '../../services/AuthService';
import { withRouter } from 'react-router-dom';
// import OrderService from '../../services/OrderService';
// import Cart from '../cart/Cart';

class NavBar extends Component {
  handleLogout = () => {
    authService.logout()
      .then(() => {
        const { history } = this.props;
        console.log(this.props);
        this.props.onUserChange({});
        history.push('/login');
      })
  }

  // handleCart = (user) => {
  //   OrderService.getOrder(user)
  //     .then(order => {
  //       console.log(order)
  //     }).catch((err) => console.log(err));
  // }
  
  render(){
    const { user } = this.props;

    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/product">Wants</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mr-auto">
          </ul>

          <ul className="navbar-nav my-2 my-lg-0">
            { !user.email && (
              <Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
                </li>
              </Fragment>
            )}
            { user.email && (
              <Fragment>
                <li className="nav-item">
                  <span  className="nav-link">{user.email}</span>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/cart">Cart</NavLink>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={this.handleLogout}>Logout</span>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
   
    )
  }
}

export default  withAuthConsumer(withRouter(NavBar));