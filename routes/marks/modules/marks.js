// ------------------------------------
// Constants
// ------------------------------------
export const MARKS_FORM = "MARKS_FORM"


// ------------------------------------
// Actions
// ------------------------------------




// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {

  [MARKS_FORM]:(state =initialState ,action) => {
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
