import React from 'react';
import {connect} from 'react-redux';

import {markForm} from '../modules/marks'
import Marks from '../components/Marks'

const mapDispatchToProps = (dispatch) => {
  return {      
    markForm: (datas) => dispatch(markForm(datas))
  }
}

const mapStateToProps =(state) =>{
  return {
    items: state.marks.items
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Marks)