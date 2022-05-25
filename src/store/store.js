

import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import {authReducer} from '../reducers/authReducer'

import thunk from 'redux-thunk'


export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    undefined,
    middlewareEnhancer: applyMiddleware(thunk)
});