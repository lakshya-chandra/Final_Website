import {browserHistory} from 'react-router'
// ------------------------------------
// Constants
// ------------------------------------

export const SET_DATA = "SET_DATA";
export const MARKS_FORM = 'MARKS_FORM';
export const SET_STUDENT = "SET_STUDENT"
export const SET_SUBJECT = "SET_SUBJECT"
export const MARKS_DATA = "MARKS_DATA"
// ------------------------------------
// Actions
// ------------------------------------
export const set_data = (data) =>{
	return {
		type:SET_DATA,
		users:data
	}
}

export const set_student =(data) =>{
	return{
		type: SET_STUDENT,
		student: data
	}
}
export const set_subject =(data) =>{
	return{
		type: SET_SUBJECT,
		subject: data
	}
}
export const set_marks = (data) =>{
	return{
		type: MARKS_FORM,
		marks:data
	}
}

export const getStudent = (value) =>{
	return (dispatch) =>{
		const userData = JSON.parse(localStorage.getItem('key'));
		const array = [];
			userData.map(item =>{
				if(item.class == value){
					array.push(item.firstName);
				}
			})
			dispatch(set_student(array));
	}
}
export const getSubject = (value) =>{
	return (dispatch) =>{
		const userData = JSON.parse(localStorage.getItem('user'));
		const array = [];
			userData.map(item =>{
				if(item.class == value){
					array.push(item.subject);
			}
		})
		dispatch(set_subject(array));
	}
}

export const getMarks = (values) =>{
  return (dispatch) =>{
    const array = [];
    const data = JSON.parse(localStorage.getItem("marks"));
    if (data !== null) {
      data.map(function(v) {
        array.push(v);
      });
    }
    array.push(values);
    localStorage.setItem("marks", JSON.stringify(array));
    }
    localStorage.setItem("marks",JSON.stringify(values));
    dispatch(setItems(array));
  
    } 

// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {

  

  [SET_DATA]:(state,action) =>{
  	return{
  		...state,
  		clas:action.clas
  	}
  },
  [SET_STUDENT]:(state,action) =>{
  	return{
  		...state,
  		student: action.student
  	}
  },
  [SET_SUBJECT]:(state,action) =>{
  	return{
  		...state,
  		subject: action.subject
  	}
  },
  [MARKS_FORM]:(state,action) =>{
  	return{
  	...state,
  	marks:action.marks
  }
}
}


// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  items : [],
  student:[],
  subject:[],
  marks : []
}

export default function markReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
