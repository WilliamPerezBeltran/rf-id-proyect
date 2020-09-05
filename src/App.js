// import React from 'react';
// import ProductList from './js/components/ProductList';
// import ShoppingCart from './js/components/ShoppingCart';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//             <ProductList />
//             <ShoppingCart />
//       </div>
//     );
//   }
// }

// export default App;


import React from 'react';
import ProductList from './js/components/ProductList';
import ShoppingCart from './js/components/ShoppingCart';
import Home from './js/components/Home';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
	render(){

	  return (
	      <div>
	        <nav>
	          <ul>
	            <li>
	              <Link to="/">Home</Link>
	            </li>
	            <li>
	              <Link to="/about">About</Link>
	            </li>
	            <li>
	              <Link to="/users">Users</Link>
	            </li>
	          </ul>
	        </nav>

	        {/* A <Switch> looks through its children <Route>s and
	            renders the first one that matches the current URL. */}
	        <Switch>
	          <Route path="/about">
	            <ProductList />
	          </Route>
	          <Route path="/users">
	            <ShoppingCart />
	          </Route>
	          <Route path="/">
	            <Home />
	          </Route>
	        </Switch>
	      </div>
	  );
	}
}
export default App;