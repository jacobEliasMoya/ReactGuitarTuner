import {configureStore} from '@reduxjs/toolkit'
import instrumentReducer from '../features/instrument/instrumentSlice'

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// const persistConfig = {
//     key: 'root',
//     storage,
// }
  
export const store = configureStore({
    reducer:{
        instrument: instrumentReducer,
    }
})

// getting and exporting types .. typescript *upside down smile lol
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


// import {configureStore} from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' 
// import instrumentReducer from '../features/instrument/instrumentSlice'

// const persistConfig = {
//     key: 'root',
//     storage,
// }
  
// const persistedReducer = persistReducer(persistConfig, instrumentReducer)

// export const store = configureStore({
//     reducer:{
//         instrument: persistedReducer,
//     }
// })

// export const persistor = persistStore(store)

// // getting and exporting types .. typescript *upside down smile lol
// export type AppStore = typeof store
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']