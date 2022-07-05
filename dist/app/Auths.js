import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Api: {},
    kakaoid: 0,
};
const APISlice = createSlice({
    name: "kakaos",
    initialState,
    reducers: {
        putAPI: (state, action) => {
            state.Api = action.payload;
        },
        putKaokaoID: (state, action) => {
            state.kakaoid = action.payload;
        },
        APIload: (state, action) => {
            console.log(action.payload);
        },
        APIload2: (state, action) => {
            console.log(action.payload);
        },
        APIload3: (state, action) => {
            console.log(action.payload);
        },
    },
    extraReducers: {},
});
export const { putAPI, putKaokaoID, APIload, APIload2, APIload3 } = APISlice.actions;
export default APISlice.reducer;
