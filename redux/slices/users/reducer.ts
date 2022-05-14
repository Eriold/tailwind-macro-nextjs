import { createReducer } from '@reduxjs/toolkit'
import { addUser } from './actions'
import { UserProps } from '../../../interface/redux/user'

const initialState: UserProps = {
  from: '',
  to: '',
}

export const userReducer = createReducer(initialState, builder => {
  builder.addCase(addUser, (state: UserProps, action: any) => {
    state.from = action.payload.from
    state.to = action.payload.to
    return
  })
  return initialState
})
