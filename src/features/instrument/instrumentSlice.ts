import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {RootState} from '../../store/store'

// type for state slice
interface InstrumentState {
    selectInstrument:string
}

// initital state, types with above interface
const initialState:InstrumentState = {
    selectInstrument:''
}

// using createSlice from redux toolikit 
export const instrumentSlice = createSlice({
    name:'instrument',
    initialState,
    reducers: {
        setInstrument: (state, action:PayloadAction<string>) =>{
            state.selectInstrument = action.payload
        }
    }
})

export const { setInstrument } = instrumentSlice.actions;
export const selectInstrument = (state:RootState) => state.instrument.selectInstrument;
export default instrumentSlice.reducer