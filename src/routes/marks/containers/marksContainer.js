import React from 'react';
import {connect} from 'react-redux';

import {getStudent,getSubject,getMarks} from '../modules/marks';
import Marks from '../components/Marks';

const mapDispatchToProps = (dispatch) => {
  return {      
    getName: (datas) => dispatch(getName(datas)),
    getMarks: (marks) => dispatch(getMarks(marks)),
    getStudent: (student) => dispatch(getStudent(student)),
    getSubject:(subject) =>dispatch(getSubject(subject)),
    marks_data:(add_new) =>dispatch(Add_data(add_new))
  }
}

const mapStateToProps =(state) =>{
  return {
    items: state.marks.items,
    student:state.marks.student,
    subject:state.marks.subject,
    marks:state.marks.marks
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Marks)