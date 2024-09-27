import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AdminTrue: false
}

const adminSlice = createSlice({
    name:'admin',
    initialState: initialState,
    reducers: {
        setAdmin(state) {
            state.AdminTrue = !state.AdminTrue
        }
    }
})


export const {setAdmin} = adminSlice.actions;
export default adminSlice.reducer