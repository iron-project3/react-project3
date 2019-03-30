import React, { Component } from 'react';
import './App.css';
import NavBar from '../src/components/misc/NavBar';
import ProductList from './components/products/ProductList';
import { Switch, Route } from 'react-router-dom';
import { Login, Register } from './components/auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <section>
          <div className="container-fluid pt-4">
            <Switch>
              <Route exact path="/product" component={ProductList}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
