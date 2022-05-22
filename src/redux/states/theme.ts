import React from 'react'
import { createSlice } from '@reduxjs/toolkit'





 const initialState = {
    modeDark: false,
};

export const modelThemeSlice = createSlice({
    name: 'stateTheme',
    initialState,
    reducers: {
        changeState(state) {
            state.modeDark = !state.modeDark;
        }
    }

})

export const { changeState} = modelThemeSlice.actions
export default modelThemeSlice.reducer



