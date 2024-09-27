import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import adminSlice from "./adminSlice";
import userSlice from "./userSlice";
import foodIdSlice from "./foodIdSlice"
import paySlice from "./paySlice";



const Store = configureStore({
    reducer: {
        auth : authSlice,
        admin: adminSlice,
        user: userSlice,
        pay: paySlice,
        foodId: foodIdSlice,
        
        

        //Todo more slices
    }
})

export default Store
