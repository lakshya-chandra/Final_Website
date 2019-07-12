import { browserHistory } from 'react-router';
// ------------------------------------
// Constants
// ------------------------------------
export const GET_DATA = 'GET_DATA';
export const SET_USERS_DATA = 'SET_USERS_DATA';
export const NEW_MARKS = "NEW_MARKS";
export const SET_NEW_MARKS = "SET_NEW_MARKS";
export const TOTAL_MARKS = "TOTAL_MARKS";
export const GRADE = "GRADE"
// ------------------------------------
// Actions
// ------------------------------------
export const setUsersData = (data) => {
  return {
    type : SET_USERS_DATA,
    users : data
  }
}

export const totalMark = (data) => {
  return {
    type : TOTAL_MARKS,
    total : data
  }
}
export const setGrade = (data) =>{
  return{
    type: GRADE,
    grade: data
  }
}
export const getData = () => {
  return (dispatch) => {
    const usersData = JSON.parse(localStorage.getItem('key'));
    dispatch(setUsersData(usersData));
    
  }
} 
export const setMarksData = (data) => {
  return {
    type : SET_NEW_MARKS,
    marks : data
  }
}

 export const newmarks = () => {
  return (dispatch) => {
    const usersData = JSON.parse(localStorage.getItem('marks'));
    dispatch(setMarksData(usersData));

    let total = 0;
      usersData.map(item => {
      total = total + parseInt(item.marks);
    }) 
    dispatch(totalMark(total));
      let l = ""
      if(total > 100){
        l = "A"
     }
     else{
      l = "B"
     }
     dispatch(setGrade(l));
  }
}
// ------------------------------------
// Actions creator
// ------------------------------------
export const ACTION_HANDLERS = {
  [SET_USERS_DATA]:(state, action) => {
    return {
      ...state,
      users : action.users
    }
  },
   [SET_NEW_MARKS]:(state, action) => {
    return {
      ...state,
      marks : action.marks
    }
  },
   [TOTAL_MARKS]:(state, action) => {
    return {
      ...state,
      total: action.total
    }
  },
  [GRADE]:(state,action) =>{
    return{
      ...state,
      grade:action.grade
    }
  }
}
// ------------------------------------
// Action Handlers
// ------------------------------------


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  users : [],
  marks:[],
  total:[],
  grade:''
}

export default function listReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
