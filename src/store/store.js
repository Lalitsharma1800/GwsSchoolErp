import {configureStore,} from '@reduxjs/toolkit'
import { teacherInfoSlice, authSlice } from '.';

const store = configureStore({

    reducer: {
       auth: authSlice,
       teacherInfo: teacherInfoSlice,
       
    }
})

  
export default store;