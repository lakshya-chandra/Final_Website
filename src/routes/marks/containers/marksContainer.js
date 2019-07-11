import React from 'react';
import {connect} from 'react-redux';

import {markForm,getStudent,getSubject} from '../modules/marks';
import Marks from '../components/Marks';

const mapDispatchToProps = (dispatch) => {
  return {      
    markForm: (datas) => dispatch(markForm(datas)),
    getName: (datas) => dispatch(getName(datas)),
    getStudent: (student) => dispatch(getStudent(student)),
    getSubject:(subject) =>dispatch(getSubject(subject)),
    Add_data:(add_new) =>dispatch(Add_data(add_new))
  }
}

const mapStateToProps =(state) =>{
  return {
    items: state.marks.items,
    clas: state.marks.clas,
    student:state.marks.student,
    subject:state.marks.subject
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Marks)