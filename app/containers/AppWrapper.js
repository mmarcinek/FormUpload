import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions'

const {
  View,
  Text,
  TouchableHighlight
} = ReactNative;

class AppWrapper extends Component {
  addCount(){
    this.props.count();
  }

  render(){
    return <View>
      <Text>Hello World! From AppContainer</Text>
      <Text>
        Counter: { this.props.counter }
      </Text>
      <TouchableHighlight onPress={() => {this.addCount()} }>
      <Text>Press to Count</Text>
      </TouchableHighlight>
    </View>
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => { 
  return {
    counter: state.counter
  } 
}, mapDispatchToProps)(AppWrapper);

// let mock = require('./mock.json');

// const tableHead = Object.keys(mock.table[0]);
// const tableData = [];

// class FormUpload extends Component{
//   render() {
//     return (
//       <View style={styles.container}>
//         <Table style={styles.table} borderStyle={{borderWidth: 0.5, borderColor: '#c8e1ff'}}>
//           <Row data={tableHead} style={styles.head} textStyle={styles.text} flexArr={[4, 4, 4, 4, 2, 2, 2, 2, 6]}/>
//           <Cols data={tableData} textStyle={styles.text} heightArr={[20, 50]} flexArr={[4, 4, 4, 4, 2, 2, 2, 2, 6]}/>
//         </Table>
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   table: { 
//     width: 660,
//    },
//   head: { height: 40, backgroundColor: '#f1f8ff' },
//   text: { textAlign: 'center' },
//   title: {
//     fontSize: 30,
//     alignSelf: 'center',
//     marginBottom: 30
//   },
//   buttonText: {
//     fontSize: 18,
//     color: 'white',
//     alignSelf: 'center'
//   },
//   button: {
//     height: 36,
//     backgroundColor: '#48BBEC',
//     borderColor: '#48BBEC',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignSelf: 'stretch',
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
// });