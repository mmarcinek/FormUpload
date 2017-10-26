import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} = ReactNative;

let mock = require('../../mock.json');

const tableHead = Object.keys(mock.table[0]);
const tableData = [];
const project = mock.project;

class JobTable extends Component {
  render() {
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
            <Text>{project.company}</Text>
            <Text>{project.address_1}</Text>
            <Text>{project.address_2}</Text>
            <Text>{project.city}</Text>
            <Text>{project.state}</Text>
            <Text>{project.zipcode}</Text>
          </View>
          <View style={styles.col3}>
            <Text style={{ marginBottom: 20 }}>{mock.job_id}</Text>
            <Text>Date Collected:{mock.date_collected}</Text>
            <Text>Collected By: {mock.collected_by}</Text>
          </View>
        </View>
        <View>
          <Table style={styles.table} borderStyle={{borderWidth: 0.5, borderColor: '#c8e1ff'}}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text} flexArr={[4, 4, 4, 4, 2, 2, 2, 2, 6]}/>
            <Cols data={tableData} textStyle={styles.text} heightArr={[20, 50]} flexArr={[4, 4, 4, 4, 2, 2, 2, 2, 6]}/>
          </Table>
        </View>
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