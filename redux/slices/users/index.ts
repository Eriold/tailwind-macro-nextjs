import { createReducer } from '@reduxjs/toolkit'

interface Form {
  id: string
}

interface State {
  forms: Form
}

let intialState: State = {
  forms: {
    id: 'FROM_TO',
  },
}

export const userReducer = createReducer(intialState, {
  ADD_FROMTO: (state: State, action) => {
    state.forms = action.payload
  },
})
