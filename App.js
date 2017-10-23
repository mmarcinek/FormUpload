import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


let mock = require('./mock.json');

const tableHead = Object.keys(mock.table[0]);
const tableData = [];

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Table style={styles.table} borderStyle={{borderWidth: 0.5, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} flexArr={[4, 4, 4, 4, 2, 2, 2, 2, 6]}/>
          <Cols data={tableData} textStyle={styles.text} heightArr={[20, 50]} flexArr={[4, 4, 4, 4, 2, 2, 2, 2, 6]}/>
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  table: { 
    width: 660,
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
});
