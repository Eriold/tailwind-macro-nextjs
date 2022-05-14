import { createAction } from '@reduxjs/toolkit'
interface UserProps {
  from: string;
  to: string;
}

export const addUser = createAction<UserProps>('add/addUser')
