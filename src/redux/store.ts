import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import { modelThemeSlice } from './states/theme';

import { persistStore, persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


export interface AppStore{
    modelTheme: any,
   
}
const persistConfig = {
  key: 'root',
  storage,
}




const persistedReducer = persistReducer(persistConfig,modelThemeSlice.reducer)




export const store =  configureStore<AppStore>({
    reducer: combineReducers({
        modelTheme :persistedReducer
    }),
    middleware: (getDefaultMiddleware:any) => getDefaultMiddleware({    
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }), 
    devTools: true,
    
})

export const persistor =persistStore(store)
    
    


