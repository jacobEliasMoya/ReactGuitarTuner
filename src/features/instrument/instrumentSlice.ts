import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {RootState} from '../../store/store'
import { InstrumentType } from "../../types/instrumentType";

// initital state, types with above interface
const initialState:InstrumentType = {
    key:0,
    image:'',
    title:'',
    description: '',
    id:'',
    standardTuning:['']
}

// using createSlice from redux toolikit 
export const instrumentSlice = createSlice({
    name:'instrument',
    initialState,
    reducers: {
        setInstrument: (state, action:PayloadAction<InstrumentType>) =>{
            return {...state,...action.payload}
        }
    }
})

export const { setInstrument } = instrumentSlice.actions;
export const selectInstrument = (state:RootState) => state.instrument;
export default instrumentSlice.reducer