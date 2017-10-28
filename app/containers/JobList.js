import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { ActionCreators } from '../actions';
import realm from '../store/realm';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Modal
} = ReactNative



class JobList extends Component {
  constructor(props) {
    super(props);

    this.jobResults = Array.from(realm.objects('Job').sorted('createdAt'));
    if (this.jobResults.length < 1) {
      realm.write(() => {
        realm.create('Job', {
          job_id: 'ed441234', 
          uploaded: false, 
          company: 'Foo Company', 
          address_1: '456 Buford highway',
          address_2: '',
          city: 'Atlanta',
          state: 'GA',
          zipcode: 30307,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      })
    }
    
    this.jobList = this.jobResults.map((job) => {
      return(
        <View onPress={this.jobSelect} key={job.job_id} style={{flexDirection: 'row', paddingTop: 20, paddingLeft:20, borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
          <TouchableHighlight style={{width: 75, height: 40}} onPress={this.jobSelect}>
            <Text>Select</Text>
          </TouchableHighlight>
          <Text style={{width: 150, height: 40}}>{job.job_id}</Text>
          <Text style={{width: 150, height: 40}}>{job.company}</Text>
        </View>
      )
    })

    this.state = {
      modalVisible: false,
    }

  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  jobSelect(){
  
  }

  render(){ 
    return (
      <View>
        <Text style={{textAlign: 'center', fontSize: 15, padding: 15}}>Jobs</Text>
        <View style={{flexDirection: 'row', paddingLeft: 20, borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
          <Text style={{width: 75, height: 40}}></Text>
          <Text style={{width: 150, height: 40}}>JOB ID</Text>
          <Text style={{width: 150, height: 40}}>Company</Text>
        </View> 
        <View>
          {this.jobList}
        </View>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(!this.state.modalVisible)
        }} style={{marginTop:20, marginLeft: 20, height: 30}}>
          <Text>Add a Job</Text>
        </TouchableHighlight>
        <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
        <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
        </View>
      </Modal>  
      </View>
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