import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    totalPrice: null,
    paymentstatus: false,
    foodItems: [],
}
const paySlice = createSlice({
    name : "pay",
    initialState,
    reducers: {
        updateTP: (state,action) => {
            state.totalPrice += action.payload
        },
        reduceTP: (state,action) => {
            state.totalPrice -= action.payload
        },
        updatePS: (state) => {
            state.paymentstatus = true;
        },
        addFood: (state, action) => {
            state.foodItems.push(action.payload); 
        },
        removeFood: (state, action) => {
            state.foodItems = state.foodItems.filter(food => food.ID !== action.payload);
        },
    }
})

export const {updateTP,reduceTP,updatePS,addFood,removeFood} = paySlice.actions
export default paySlice.reducer

