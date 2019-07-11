// ------------------------------------
// Constants
// ------------------------------------
  export const CLASS_FORM =  'CLASS_FORM'
 export const ITEM_LOCALSTORAGE ='ITEM_LOCALSTORAGE'
// ------------------------------------
// Actions
// ------------------------------------
export const classForm = (value) => {
  return dispatch => {


    let array_new = [];
    let data_new = JSON.parse(localStorage.getItem("user"));
      if (data_new != null) {
        data_new.map(function(v) {
        array_new.push(v);
      });
    }
        array_new.push(value);
        localStorage.setItem("user", JSON.stringify(array_new));
}
        localStorage.setItem("user",JSON.stringify(value));
        dispatch(setItems(value));
  
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
        localStorage.setItem("user",JSON.stringify(value));
        dispatch(setItems(value));
}
export const setItems = (value)=>{
  return {
    type: CLASS_FORM,
    items: value
  }
}
export const actions = {
  // submitForm
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {

  [CLASS_FORM]:(state =initialState ,action) => {
    return{
      ...state,
      items: action.items
    }
  }
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  items : []
}


export default function markReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
  