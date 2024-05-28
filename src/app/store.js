import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/model/todoSlice'

export const store = configureStore ({
reducer: todoReducer
})