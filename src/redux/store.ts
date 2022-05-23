import { configureStore } from '@reduxjs/toolkit';
import { modelThemeSlice } from './states/theme';
import { modelFlagsReducer } from './states/ListFlags';


export interface AppStore{
    modelTheme: any,
    flags: any,
  //  flagSelected: any,
}

export default configureStore<AppStore>({
    reducer: {
        modelTheme: modelThemeSlice.reducer,
        flags: modelFlagsReducer.reducer
    },
    devTools:true
})