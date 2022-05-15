import { createReducer } from '@reduxjs/toolkit'
import { ParcelProps } from '../../../interface'
import { addParcel } from './actions'

let initialState: ParcelProps = {
  forms: {
    weight: 0,
    height: 0,
    width: 0,
    length: 0,
    distance_unit: '',
    mass_unit: '',
  },
}

export const parcelReducer = createReducer(initialState, builder => {
  builder.addCase(addParcel, (state: ParcelProps, action: any) => {
    state.forms = action.payload
    return
  })
  return initialState
})
