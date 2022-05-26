

import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import {authReducer} from '../reducers/authReducer'
import { uiReducer } from '../reducers/uiReducer';

import thunk from 'redux-thunk'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer
    },
    undefined,
    middlewareEnhancer: applyMiddleware(thunk)
});