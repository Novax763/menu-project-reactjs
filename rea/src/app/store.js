import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../features/counter/counterSlic";

export const store = configureStore({
    reducer : {
        cal: counterReducer,
    },
})