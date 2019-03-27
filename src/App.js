import React, { Component } from 'react';
import './App.css';
import NavBar from '../src/components/misc/NavBar';
import ProductList from './components/products/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ProductList />
      </div>
    );
  }
}

export default App;
