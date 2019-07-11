import React from 'react';
import {connect} from 'react-redux';

import {submitForm} from '../modules/student'
import Student from '../components/Student'

const mapDispatchToProps = (dispatch) => {
  return {      
    submitForm: (data) => dispatch(submitForm(data))
  }
}

const mapStateToProps =(state) =>{
  return {
    items: state.student.items
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Student)