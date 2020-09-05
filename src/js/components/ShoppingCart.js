import React, { Component } from 'react';
import {removeFromCart} from '../ActionCreator'
import {connect} from 'react-redux'

class ShoppingCart extends Component {

  render() {
    return (
        <table >
          <tbody>
            {this.props.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td >${product.price}</td>
                <td ><button onClick={() => this.props.removeFromCart(product)}></button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td>
                Total: ${this.props.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
    )
  }
}

const mapStateToProps = state =>{
  return{
    cart:state.cart
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    // dispatch,
    // removeFromCart(product){
    //     dispatch(removeFromCart());
    // },

    dispatch,
    removeFromCart: (product) => {
            dispatch(removeFromCart(product));
        },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);

