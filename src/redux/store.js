import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

const store= configureStore({
    reducer: {
        appSlice: appReducer
        // Add your reducers here
    }
});
export default store;