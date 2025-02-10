import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {RootState} from '../../store/store'

// type for state slice
interface InstrumentState {
    key:number,
    image:string,
    title:string,
    description:string,
    id:string
}   

// initital state, types with above interface
const initialState:InstrumentState = {
    key:0,
    image:'',
    title:'',
    description: '',
    id:''
}

// using createSlice from redux toolikit 
export const instrumentSlice = createSlice({
    name:'instrument',
    initialState,
    reducers: {
        setInstrument: (state, action:PayloadAction<InstrumentState>) =>{
            return {...state,...action.payload}
        }
    }
})

export const { setInstrument } = instrumentSlice.actions;
export const selectInstrument = (state:RootState) => state.instrument;
export default instrumentSlice.reducer