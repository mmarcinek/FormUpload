import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { ActionCreators } from '../actions';
import realm from '../store/realm';

const {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  ListView
} = ReactNative

const jobsResults = realm.objects('Job');

class JobList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };  
  }

  addJob() {
    console.log(jobsResults)
  }

  render(){
    return (
      // <View>
      {/* <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>}
      />  */}
      <TouchableHighlight onPress={this.addAJob}>
        <Text>Add a Job</Text>
      </TouchableHighlight>
      // </View>
    )
  }  
}



const mapStateToProps = (state, props) => ({
  // ...getJobList(state),
  // dataSource: store.jobsDS.cloneWithRows(jobsResults)
})

const mapDispatchToProps = {
  // ...ActionCreators
}


export default connect(mapStateToProps, mapDispatchToProps)(JobList);