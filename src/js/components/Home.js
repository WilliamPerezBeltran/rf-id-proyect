import React, { Component } from 'react';
import {removeFromCart} from '../ActionCreator'
import {connect} from 'react-redux'

class Home extends Component {

  render() {
    return (
      <div>
        <h2>Home</h2>;
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
  }
}

const mapDispatchToProps = dispatch =>{
  return{
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

