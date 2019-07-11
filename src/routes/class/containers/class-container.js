import React from 'react';
import {connect} from 'react-redux';

import {classForm} from '../modules/class'
import Class from '../components/Class'

const mapDispatchToProps = (dispatch) => {
  return {      
    classForm: (datas) => dispatch(classForm(datas))
  }
}

const mapStateToProps =(state) =>{
  return {
    items: state.class.items
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Class)