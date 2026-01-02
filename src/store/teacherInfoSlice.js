import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   teacherInfo: {
        id: "",
        name: "",
        classname: "",
        age: "",
        gender: "",
        phone: "",
        subjects: "",
        qualification: "",
        experience: "",
        aadhar: "Not Available",
        joined: "Not Available",
    },
    updatedId: []
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
