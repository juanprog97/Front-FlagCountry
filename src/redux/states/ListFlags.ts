import React from 'react'
import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { FlagDetails } from "../../models/FlagDetails.model";


interface FlagReducer{
    listFlag: null | never[] | FlagDetails[];
    
}

const initialState: FlagReducer = {
    listFlag: [],
    
}



export const modelFlagsReducer = createSlice({
    name: 'modelFlagsReducer',
    initialState,
    reducers: {
        createListFlag: (state, action: PayloadAction<FlagDetails[]> ) => {
            state.listFlag = action.payload;    
        },
        filterFlags: (state, action: PayloadAction<FlagDetails[]>) => {
              if (action.payload!)
                state.listFlag = action.payload;
           
        }

    }

})

export const { createListFlag,filterFlags } = modelFlagsReducer.actions
export default modelFlagsReducer.reducer