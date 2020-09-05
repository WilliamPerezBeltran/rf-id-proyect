import React from 'react';
import ProductList from './js/components/ProductList';
import ShoppingCart from './js/components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div>
            <ProductList />
            <ShoppingCart />
      </div>
    );
  }
}

export default App;
