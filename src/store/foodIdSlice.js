import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    foodid: '',
   
}

const foodIdSlice = createSlice({
    name : "foodId",
    initialState,
    reducers: {
        setfoodId: (state,action) => {
            state.foodid = action.payload
        }
        
    }
})


export const {setfoodId} = foodIdSlice.actions;
// export const  status = (state) => state.user.status
export default foodIdSlice.reducer