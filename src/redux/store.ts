import { configureStore } from '@reduxjs/toolkit';
import { modelThemeSlice } from './states/theme';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface Appstore{
    modelTheme: any,
  //  flagsResume: any,
  //  flagSelected: any,
}

export default configureStore<Appstore>({
    reducer: {
        modelTheme: modelThemeSlice.reducer,
       
    },
    devTools:true
})