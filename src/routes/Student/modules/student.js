// ------------------------------------
// Constants
// ------------------------------------
  export const SUBMIT_FORM =  'SUBMIT_FORM'
  export const ITEM_LOCALSTORAGE ='ITEM_LOCALSTORAGE'
// ------------------------------------
// Actions
// ------------------------------------
export const submitForm = (values) => {
  return dispatch => {


    let array = [];
    let data = JSON.parse(localStorage.getItem("key"));
    if (data !== null) {
      data.map(function(v) {
        array.push(v);
      });
    }
    array.push(values);
    localStorage.setItem("key", JSON.stringify(array));
    }
    localStorage.setItem("key",JSON.stringify(values));
    dispatch(setItems(values));
  
    }
export const setItems = (values)=>{
  return {
    type: SUBMIT_FORM,
    items: values
  }
}
export const getData = () => {
  return (dispatch) => {
    const usersData = JSON.parse(localStorage.getItem('key'));
    dispatch(setUsersData(usersData));
  }
} 

export const actions = {
  // submitForm
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {

  [SUBMIT_FORM]:(state =initialState ,action) => {
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


export default function studentReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

