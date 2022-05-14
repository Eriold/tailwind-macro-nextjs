import { createReducer } from '@reduxjs/toolkit'
import { ParcelProps } from '../../../interface'
import { addParcel } from './actions'

let initialState: ParcelProps = {
  forms: {
    weight: '',
    height: '',
    width: '',
    length: '',
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
