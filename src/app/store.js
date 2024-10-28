import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authslice';
import postSlice from './postSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        post: postSlice
    }
})