import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   teacherInfo: {
        name: "",
        phone: "",
        age: "",
        gender: "",
        subjects: "",
        joined: "",
        aadhar: "",
        qualification: "",
        experience: "",
        className: "",
    }
}

const teacherInfoSlice = createSlice({

    name: "teacherInfo",
    initialState,
    reducers: {
       setTeacherInfo(state, action) {
        state.teacherInfo = {
            ...state.teacherInfo,
            ...action.payload,
        };
        }
    },
})

export const {setTeacherInfo} = teacherInfoSlice.actions;
export default teacherInfoSlice.reducer;
