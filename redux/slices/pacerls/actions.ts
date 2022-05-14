import { createAction } from '@reduxjs/toolkit'
import { ParcelProps } from '../../../interface'


export const addParcel = createAction<ParcelProps>('add/addParcel')
