import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    session: null,
    userData: {
        name: null,
        id: null,
        role: null,
        gmail: null,
    },
    
}

const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.userData.role = action.payload;
        },
        setSession: (state, action) => {
            state.session = action.payload;
        },
        loggedin: (state, action) => {
            state.status  = true;
        },
        loggedout: (state) => {
            state.status = false;
            state.session = null;
        }
    }

})

export const {loggedin, loggedout, setSession, setRole} = authSlice.actions;

export default authSlice.reducer;