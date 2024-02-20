import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tag: "",
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setTag: (state, action) => {
            state.tag = action.payload;
        }
    }
})

export const {setTag} = appSlice.actions;
export default appSlice.reducer;