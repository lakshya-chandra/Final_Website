// ------------------------------------
// Constants
// ------------------------------------
  export const CLASS_FORM =  'CLASS_FORM'
 
// ------------------------------------
// Actions
// ------------------------------------
export const classForm = (value) => {
  return dispatch => {


    let array_new = [];
    let data_new = JSON.parse(localStorage.getItem("key"));
    if (data_new != null) {
      data_new.map(function(v) {
        array_new.push(v);
      });
    }
    array_new.push(value);
    localStorage.setItem("key", JSON.stringify(array_new));
}
    localStorage.setItem("key",JSON.stringify(value));
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
