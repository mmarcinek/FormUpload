import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions'

const {
  View,
  Text
} = ReactNative;

class AppContainer extends Component {
  render(){
    return <View>
      <Text>Hello World! From AppContainer</Text>
    </View>
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(()=> { return {} }, mapDispatchToProps)(AppContainer);