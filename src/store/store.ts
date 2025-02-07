import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer:{
    }
})

// getting and exporting types .. typescript *upside down smile lol
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']