import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';

const {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} = ReactNative

class JobList extends Component {
  render(){
    return (
      <View>
        <Text>Hello from JobList</Text>
      </View>
    )
  }  
}

function mapStateToProps(state){
  return {
    jobList: state.jobList
  }
}


export default connect(mapStateToProps)(JobList);