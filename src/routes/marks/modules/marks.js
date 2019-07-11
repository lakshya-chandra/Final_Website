import {browserHistory} from 'react-router'
// ------------------------------------
// Constants
// ------------------------------------
export const MARKS_FORM = "MARKS_FORM"
export const SET_DATA = "SET_DATA"
export const SET_STUDENT = "SET_STUDENT"
export const SET_SUBJECT = "SET_SUBJECT"
export const ADD_NEW_DATA ="ADD_NEW_DATA"
// ------------------------------------
// Actions
// ------------------------------------
export const set_data = (data) =>{
	return {
		type:SET_DATA,
		users:data
	}
}
export const marks_form = (data) =>{
	return {
		type:MARKS_FORM,
		clas:data
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
export const add_new_data = (data) =>{
	return{
		type: ADD_NEW_DATA,
		new:data
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
			console.log('valuuee',array);
			dispatch(set_student(array));
	}
}
export const getSubject = (value) =>{
	console.log(value);
	return (dispatch) =>{
		const userData = JSON.parse(localStorage.getItem('user'));
		const array = [];
			userData.map(item =>{
				if(item.class == value){
					array.push(item.subject);
			}
		})
		console.log("calue",array);
		dispatch(set_subject(array));
	}
}
export const Add_data = (value) =>{
  return dispatch =>{
    const marks = [];
    let add_marks_data = JSON.parse(localStorage.getItem("user"));
      if(add_marks_data!= null){
         add_marks_data.map(function(k){
         marks.push(k)
  });
}
        marks.push(value);
        localStorage.setItem("user", JSON.stringify(marks));
}
        localStorage.setItem("user",JSON.stringify(marks));
        dispatch(setItems(value));
}


// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {

  [MARKS_FORM]:(state =initialState ,action) => {
    return{
      ...state,
      items: action.items
    }
  },

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
  [ADD_NEW_DATA]:(state,action) =>{
  	return{
  	...state,
  	add_new:action.new
  }
}
}


// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  items : [],
  clas:[],
  student:[],
  subject:[],
  add_new:[]
}

export default function markReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
