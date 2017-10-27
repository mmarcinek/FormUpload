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

class JobList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };  

    this.jobResults = realm.objects('Job').sorted('createdAt');

    if (this.jobResults.length < 1) {
      realm.write(() => {
        realm.create('Job', {
          job_id: 'ed43214', 
          uploaded: false, 
          company: 'Test Co.', 
          address_1: '123 test highway',
          address_2: 'Ste 123',
          city: 'Atlanta',
          state: 'GA',
          zipcode: 30307,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      })
    }
    
    this.jobResults.addListener((name, changes) => {
      console.log("changed: " + JSON.stringify(changes));
    });

    this.state = {};
  }

  addJob() {
    console.log(this.jobResults)
  }

  render(){
    return (
      <TouchableHighlight onPress={this.addJob} style={{marginTop:20, marginLeft: 20, height: 30}}>
        <Text>Add a Job</Text>
      </TouchableHighlight>
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