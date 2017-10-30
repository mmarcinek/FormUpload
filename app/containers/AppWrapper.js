import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Nav } from '../config/router';

class AppWrapper extends Component {ß
  render(){
    return <Nav/>
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {return {} }, mapDispatchToProps)(AppWrapper);
