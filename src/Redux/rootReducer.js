import { combineReducers } from "@reduxjs/toolkit";
import ariclesSlice from "./slices/ariclesSlice";

const rootReducers = combineReducers({
    articles: ariclesSlice
})

export default rootReducers;