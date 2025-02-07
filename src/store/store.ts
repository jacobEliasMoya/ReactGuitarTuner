import {configureStore} from '@reduxjs/toolkit'
import instrumentReducer from '../features/instrument/instrumentSlice'

export const store = configureStore({
    reducer:{
        instrument: instrumentReducer,
    }
})

// getting and exporting types .. typescript *upside down smile lol
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']