import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/users'
import { parcelReducer } from './slices/pacerls/index'

export default configureStore({
  reducer: { userReducer, parcelReducer },
})
