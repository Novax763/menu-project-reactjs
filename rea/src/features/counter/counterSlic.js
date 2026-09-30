import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
    value: null,
}

export const counterSlic = createSlice({
    name: "calculation",
    initialState,
    reducers : {
        add: (current, action) => {
            // console.log(current)
            // console.log(action)
            const addNumber = 
            Number(action.payload.malFirst) + 
            Number(action.payload.malSecond)
            current.value = addNumber

        },
        sum: (current, action) => {
            const addNumber =
              Number(action.payload.malFirst) -
              Number(action.payload.malSecond);
            current.value = addNumber;

        },
        mult: (current, action) => {
            const addNumber =
              Number(action.payload.malFirst) *
              Number(action.payload.malSecond);
            current.value = addNumber;
        },
        devi: (current, action) => {
            const addNumber =
              Number(action.payload.malFirst) /
              Number(action.payload.malSecond);
            current.value = Math.round(addNumber);
        }

    },
});


// Action creators are generated for each case reducer function
export const {add, sum , mult, devi} = counterSlic.actions


export default counterSlic.reducer