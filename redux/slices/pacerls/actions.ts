import { createAction } from '@reduxjs/toolkit'
interface ParcelProps {
    forms: {
      weight: string
      height: string
      width: string
      length: string
      distance_unit: string
      mass_unit: string
    }
  }

export const addParcel = createAction<ParcelProps>('add/addParcel')
