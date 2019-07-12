import React from 'react';
import {connect} from 'react-redux';
import {getData,newmarks} from '../modules/list'
import ListComponent from '../components/List'


const mapDispatchToProps = (dispatch) => {
  return  {
    getData : () => dispatch(getData()),
    newmarks: () => dispatch(newmarks())
  }
}

const mapStateToProps = (state) => {
  return  {
    users : state.list.users,
    marks:  state.list.marks,
    total:  state.list.total
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListComponent)