import { createReducer } from '@reduxjs/toolkit'

interface Form {
  id: string
}

interface State {
  forms: Form
}

let intialState: State = {
  forms: {
    id: 'PARCEL',
  },
}

export const parcelReducer = createReducer(intialState, {
  ADD_PARCEL: (state: State, action) => {
    state.forms = action.payload
  },
})
