import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { Button } from 'react-native-elements';
import realm from '../store/realm';
import Orientation from 'react-native-orientation';


const {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} = ReactNative;

class JobTable extends Component {
  constructor(props){
    super(props)

    let jobDetails = Array.from(realm.objects('JobTable'))
    console.log(jobDetails)
    this.jobHeader = Object.keys(jobDetails[0])

    // if (this.jobDetails.length < 1) {
    //   realm.write(() => {
    //     realm.create('JobTable', {
    //       table_id: this.props.navigation.state.params.job_id,
    //       sample_id: 'BD1234435',
    //       location: 'Bathroom',
    //       test_type: 'Test',
    //       volume: 15,
    //       area: 15,
    //       TAT: '?',
    //       RH: 77.5,
    //       temp: 22.3,
    //       notes: 'Some Notes'
    //     })
    //   })
    // }

    this.jobDetailsList = this.jobDetails.map((detail) =>{
      return (
        <View style={{flexDirection: 'row', paddingTop: 20, paddingLeft:20, borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
          <Text style={{width: 75, height: 40}}>{detail.sample_id}</Text>
          <Text style={{width: 100, height: 40}}>{detail.location}</Text>
          <Text style={{width: 75, height: 40}}>{detail.test_type}</Text>
          <Text style={{width: 50, height: 40}}>{detail.volume}</Text>
          <Text style={{width: 50, height: 40}}>{detail.area}</Text>
          <Text style={{width: 50, height: 40}}>{detail.TAT}</Text>
          <Text style={{width: 50, height: 40}}>{detail.RH}</Text>
          <Text style={{width: 50, height: 40}}>{detail.temp}</Text>
          <Text style={{width: 100, height: 40}}>{detail.notes}</Text>
        </View>
      )
    })

    this.state = {
      modalVisible: false,
      formData: {}
    }
  }

  componentDidMount() {
    // this locks the view to Landscape
    Orientation.lockToLandscape();
  }
  componentWillUnmount() {
    Orientation.unlockAllOrientations(); 
  }


  handleFormChange(formData){
    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(e, component){
    //console.log(e, component);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  saveSample(params){
    realm.write(() => {
      realm.create('JobTable', {
        table_id: this.props.navigation.state.params.job_id,
        sample_id: this.state.formData.sample_id,
        location: this.state.formData.location,
        test_type: this.state.formData.test_type,
        volume: this.state.formData.volume,
        area: this.state.formData.area,
        TAT: this.state.formData.TAT,
        RH: this.state.formData.RH,
        temp: this.state.formData.temp,
        notes: this.state.formData.notes
      })
    });

    this.setState({formData: {}})
    this.setModalVisible(!this.state.modalVisible)
    this.forceUpdate();
    
  }

  
  render() {
    const job = {
      job_id: this.props.navigation.state.params.job_id,
      company: this.props.navigation.state.params.company,
      address_1: this.props.navigation.state.params.address_1,
      address_2: this.props.navigation.state.params.address_2,
      city: this.props.navigation.state.params.city,
      state: this.props.navigation.state.params.state,
      zipcode: this.props.navigation.state.params.zipcode
    } 

    return (
      <View style={styles.container}>
        <View style={styles.flexContainer}>
          <View style={styles.col1}>
            <Text>Air Allergen & Mold Testing</Text>
            <Text>1543 Lilburn Stn-Mtn Rd, Ste.200</Text>
            <Text>Stone Mountain, Ga. 30087</Text>
            <Text>Phone (770) 938-4861</Text>
            <Text>Fax (770) 270-0853</Text>
          </View>
          <View style={styles.col2}>        
            <Text>{job.company}</Text>
            <Text>{job.address_1}</Text>
            <Text>{job.address_2}</Text>
            <Text>{job.city}</Text>
            <Text>{job.state}</Text>
            <Text>{job.zipcode}</Text>
          </View>
          <View style={styles.col3}>
            <Text style={{ marginBottom: 20 }}>{job.job_id}</Text>
            <Text>Date Collected:{mock.date_collected}</Text>
            <Text>Collected By: {mock.collected_by}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={{flexDirection: 'row', paddingTop: 20, paddingLeft:20, borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
            <Text style={{width: 75, height: 20, backgroundColor: '#d3d3d3'}}>{jobHeader.sample_id}</Text>
            <Text style={{width: 100, height: 20, backgroundColor: '#d3d3d3'}}>{jobHeader.location}</Text>
            <Text style={{width: 75, height: 20, backgroundColor: '#d3d3d3'}}>{jobHeader.test_type}</Text>
            <Text style={{width: 50, height: 20, backgroundColor: '#d3d3d3'}}>{jobHeader.volume}</Text>
            <Text style={{width: 50, height: 20, backgroundColor: '#d3d3d3'}}>{jobHeader.area}</Text>
            <Text style={{width: 50, height: 20, backgroundColor: '#d3d3d3'}}>{jobHeader.TAT}</Text>
            <Text style={{width: 50, height: 20, backgroundColor: '#d3d3d3'}}>{jobHeader.RH}</Text>
            <Text style={{width: 50, height: 20, backgroundColor: '#d3d3d3'}}>{jobHeader.temp}</Text>
            <Text style={{width: 100, height: 20, backgroundColor: '#d3d3d3'}}>{jobHeader.notes}</Text>
          </View>
          <View>
            {this.jobDetailsList}
          </View>
          <Button
            raised
            icon={{name: 'add'}}
            title='Add a Sample' 
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }} />
        </ScrollView>
        <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
        >
        <View style={{marginTop: 22}}>
          <ScrollView>
            <Form
              ref='jobDetail'
              onFocus={this.handleFormFocus.bind(this)}
              onChange={this.handleFormChange.bind(this)}
              label="Sample Values">
              <InputField 
                  ref='sample_id' 
                  label='Sample Id' 
                  placeholder='Sample ID'/>
              
              <InputField 
                  ref='location' 
                  label='Location'
                  placeholder='Location'/>
          
              <InputField 
                  ref='test_type' 
                  label='Test Type'
                  placeholder='Test Type'/>
              
              <InputField 
                  ref='volume' 
                  label='Volume'
                  placeholder='Volume'/>
              
              <InputField 
                  ref='area' 
                  label='Area' 
                  placeholder='Area'/>
              
              <InputField 
                  ref='TAT' 
                  label='TAT'
                  placeholder='TAT'/>

              <InputField 
                  ref='RH' 
                  label='RH'
                  placeholder='RH'/>
              
              <InputField 
                  ref='temp' 
                  label='Temp'
                  placeholder='Temp'/>
              
              <InputField 
                  ref='notes' 
                  label='Notes'
                  placeholder='Notes'/>

              </Form>
            </ScrollView>
            <Button
              raised
              icon={{name: 'save'}}
              title='Save Job' 
              onPress={() => { this.saveJob()} } />
          </View>
        </Modal>  
      </View>
    )
  }
}

function mapStateToProps(state){
  return {
    jobItems: state.jobItems
  }
}

const styles = StyleSheet.create({
  table: { 
    width: 660,
    marginTop: 25,
    marginLeft: 10
   },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { textAlign: 'center' },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  flexContainer: {
    padding: 0,
    margin: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col1: {
    width: 200
  },
  col2: {
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  col3: {
    width: 200
  }  
});

export default connect(mapStateToProps)(JobTable);