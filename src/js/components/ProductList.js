// import React, { Component } from 'react';
import React from 'react';
// import store from '../store'
import {addToCart} from '../ActionCreator'
import {connect} from 'react-redux'

const ProductList = ({products,addToCart})=>{
    return (
      <div>
        {products.map(product =>
          <div  key={product.id}>
            <img src={product.image} alt={product.name} />
            <div >
              <h4>{product.name}</h4>
              <p>
                <button onClick={() => addToCart(product)}  disabled={product.inventory <= 0}>${product.price} </button>
              </p>
            </div>
          </div>
        )}
      </div>
    );

}
// export default ProductList;

const mapStateToProps = state =>{
  return{
    products:state.products
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    // dispatch,
    addToCart: (product) => {
            dispatch(addToCart(product));
        },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);

