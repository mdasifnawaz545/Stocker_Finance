import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "../app/feature/auth/authSlice";

const store = configureStore({
    reducer:authSlicer
})

export default store;