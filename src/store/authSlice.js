import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    session: null,
    userData: {
        name: "name",
        id: "id",
        role: "role",
        gmail: "e-mail",
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
        setEmail: (state, action) => {
            state.userData.gmail = action.payload;
        },
        setUserId: (state, action) => {
            state.userData.id = action.payload;
        },
        setName: (state, action) => {
            state.userData.name = action.payload;
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

export const {loggedin, loggedout, setSession, setRole, setEmail, setName, setUserId} = authSlice.actions;

export default authSlice.reducer;