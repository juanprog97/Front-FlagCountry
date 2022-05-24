import React from 'react'
import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { FlagDetails } from "../../models/FlagDetails.model";


interface FlagReducer{
    listFlag: null | never[] | FlagDetails[];
    listCode: any;
    
}

const initialState: FlagReducer = {
    listFlag: [],
    listCode: {}
    
}



export const modelFlagsReducer = createSlice({
    name: 'modelFlagsReducer',
    initialState,
    reducers: {
        createListFlag: (state, action: PayloadAction<FlagDetails[]> ) => {
            state.listFlag = action.payload;   
            
        },
       

    }

})

export const { createListFlag } = modelFlagsReducer.actions
export default modelFlagsReducer.reducer