import { configureStore } from "@reduxjs/toolkit"
import statusSlice from "./status-slice";

const store = configureStore({
    reducer:{
        status: statusSlice.reducer
    }
})
export default store;