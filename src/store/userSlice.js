import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: 'Dear',
    email:'',
    status: false
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers: {
        updateName: (state,action) => {
            state.name = action.payload
        },
        updateEmail: (state,action) => {
            state.email = action.payload
        },
        setstatus: (state) => {
            state.status = !state.status
        }
        
    }
})


export const {updateName,updateEmail,setstatus} = userSlice.actions;
// export const  status = (state) => state.user.status
export default userSlice.reducer