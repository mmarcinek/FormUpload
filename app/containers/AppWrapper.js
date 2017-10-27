import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import JobTable from './JobTable';
import JobList from './JobList';

class AppWrapper extends Component {ß
  render(){
    return <JobList {...this.props}/>
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {return {} }, mapDispatchToProps)(AppWrapper);
